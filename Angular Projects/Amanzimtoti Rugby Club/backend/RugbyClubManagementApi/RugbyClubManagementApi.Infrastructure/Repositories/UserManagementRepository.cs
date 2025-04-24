using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using RugbyClubManagementApi.Core.Models;
using RugbyClubManagementApi.Core.Repositories;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Cryptography;
using System.Text;

namespace RugbyClubManagementApi.Infrastructure.Repositories
{
    public class UserManagementRepository : IUserManagementRepository
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;

        public UserManagementRepository(IUserRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _configuration = configuration;
        }

        public async Task RegisterAsync(RegisterUserRequest request)
        {
            var existingUser = await _userRepository.GetByUserNameAsync(request.Username);
            if (existingUser != null)
            {
                throw new Exception("User already exists.");
            }

            var (passwordHash, passwordSalt) = CreatePasswordHash(request.Password);

            var newUser = new User
            {
                Id = Guid.NewGuid(),
                FirstName = request.FirstName,
                Username = request.Username,
                Email = request.Email,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                CreatedAt = DateTime.UtcNow,
                IsActive = true
            };

            await _userRepository.AddAsync(newUser);
        }

        public async Task<LoginUserResponse> LoginAsync(string userName, string password)
        {
            var user = await _userRepository.GetByUserNameAsync(userName);
            if (user != null)
            {
                if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                {
                    throw new Exception("Invalid credentials.");
                }

                user.LastLogin = DateTime.UtcNow;
                await _userRepository.UpdateAsync(user);

                var token = GenerateJwtToken(user);

                var response = new LoginUserResponse()
                {
                    User = user,
                    Token = token
                };

                return response;
            }

            throw new Exception("User not found.");
        }

        private (string passwordHash, string passwordSalt) CreatePasswordHash(string password)
        {
            using var hmac = new HMACSHA512();
            var passwordSalt = Convert.ToBase64String(hmac.Key);
            var passwordHash = Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(password)));
            return (passwordHash, passwordSalt);
        }

        private bool VerifyPasswordHash(string password, string storedHash, string storedSalt)
        {
            using var hmac = new HMACSHA512(Convert.FromBase64String(storedSalt));
            var computedHash = Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(password)));
            return computedHash == storedHash;
        }

        private string GenerateJwtToken(User user)
        {
            var secret = _configuration["JwtSettings:Secret"];

            if (string.IsNullOrEmpty(secret))
            {
                throw new InvalidOperationException("JWT secret is not configured properly.");
            }

            var claims = new[]
            {
                new System.Security.Claims.Claim(System.Security.Claims.ClaimTypes.Name, user.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["JwtSettings:Issuer"],
                audience: _configuration["JwtSettings:Audience"],
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

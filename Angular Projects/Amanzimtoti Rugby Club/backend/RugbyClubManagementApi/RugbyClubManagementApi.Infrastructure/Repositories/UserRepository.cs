using Microsoft.EntityFrameworkCore;
using RugbyClubManagementApi.Core.Models;
using RugbyClubManagementApi.Core.Repositories;
using RugbyClubManagementApi.Infrastructure.Data;

namespace RugbyClubManagementApi.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly RugbyClubDbContext _dbContext;

        public UserRepository(RugbyClubDbContext dbContext) => _dbContext = dbContext;

        public async Task<User?> GetByUserNameAsync(string username)
        {
            return await _dbContext.Users
                .FirstOrDefaultAsync(user => user.Username == username);
        }

        public async Task AddAsync(User user)
        {
            await _dbContext.Users.AddAsync(user);
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateAsync(User user)
        {
            _dbContext.Users.Update(user);
            await _dbContext.SaveChangesAsync();
        }
    }
}

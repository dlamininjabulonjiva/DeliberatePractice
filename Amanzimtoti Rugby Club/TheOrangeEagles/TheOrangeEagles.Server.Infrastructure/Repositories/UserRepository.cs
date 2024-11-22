using TheOrangeEagles.Server.Core.Repository;
using TheOrangeEagles.Server.Data;
using TheOrangeEagles.Server.Models;

namespace TheOrangeEagles.Server.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly RugbyClubDbContext _dbContext;

        public UserRepository(RugbyClubDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        //public async Task<User> GetUserByIdAsync(int id)
        //{
        //    return await _dbContext.Users.FindAsync(id);
        //}

        //public async Task<IEnumerable<User>> GetAllUsersAsync()
        //{
        //    return await _dbContext.Users.ToListAsync();
        //}

        public async Task AddUserAsync(User user)
        {
            await _dbContext.Users.AddAsync(user);
            await _dbContext.SaveChangesAsync();
        }
    }
}

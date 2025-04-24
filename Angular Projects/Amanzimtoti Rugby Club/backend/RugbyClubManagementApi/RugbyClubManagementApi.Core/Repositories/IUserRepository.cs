using RugbyClubManagementApi.Core.Models;

namespace RugbyClubManagementApi.Core.Repositories
{
    public interface IUserRepository
    {
        Task<User?> GetByUserNameAsync(string username);
        Task AddAsync(User user);
        Task UpdateAsync(User user);
    }
}

using TheOrangeEagles.Server.Models;

namespace TheOrangeEagles.Server.Core.Repository
{
    public interface IUserRepository
    {
        //Task<User> GetUserByIdAsync(int id);
        //Task<IEnumerable<User>> GetAllUsersAsync();
        Task AddUserAsync(User user);
    }
}

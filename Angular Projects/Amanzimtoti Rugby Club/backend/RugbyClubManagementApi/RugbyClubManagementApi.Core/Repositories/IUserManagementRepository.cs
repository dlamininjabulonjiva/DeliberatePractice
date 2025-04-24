using RugbyClubManagementApi.Core.Models;

namespace RugbyClubManagementApi.Core.Repositories
{
    public interface IUserManagementRepository
    {
        Task RegisterAsync(RegisterUserRequest request);
        Task<LoginUserResponse> LoginAsync(string userName, string password);
    }
}

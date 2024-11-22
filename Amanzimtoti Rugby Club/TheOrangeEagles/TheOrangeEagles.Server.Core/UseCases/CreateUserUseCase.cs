using TheOrangeEagles.Server.Core.Repository;
using TheOrangeEagles.Server.Models;

namespace TheOrangeEagles.Server.Core.UseCases
{
    public class CreateUserUseCase
    {
        private readonly IUserRepository _userRepository;

        public CreateUserUseCase(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task ExecuteAsync(User user)
        {
            await _userRepository.AddUserAsync(user);
        }
    }
}

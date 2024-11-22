using Microsoft.AspNetCore.Mvc;
using TheOrangeEagles.Server.Core.Repository;
using TheOrangeEagles.Server.Core.UseCases;
using TheOrangeEagles.Server.Models;

namespace TheOrangeEagles.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly CreateUserUseCase _createUserUseCase;

        public UsersController(IUserRepository userRepository)
        {
            _createUserUseCase = new CreateUserUseCase(userRepository);
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(User user)
        {
            await _createUserUseCase.ExecuteAsync(user);
            return Ok(user);
        }
    }
}

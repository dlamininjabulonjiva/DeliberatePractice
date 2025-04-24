using System;

namespace RugbyClubManagementApi.Core.Models
{
    public class LoginUserResponse
    {
        public User User { get; set; } = default!;
        public string Token { get; set; } = default!;
    }
}

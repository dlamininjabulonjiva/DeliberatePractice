using System;

namespace RugbyClubManagementApi.Core.Models
{
    public class Player
    {
        public Guid PlayerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Position { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime JoinedDate { get; set; }
        public bool IsActive { get; set; }
        public Guid TeamId { get; set; }
    }
}

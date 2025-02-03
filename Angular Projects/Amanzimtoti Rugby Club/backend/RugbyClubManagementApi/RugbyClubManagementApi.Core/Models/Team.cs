using System;

namespace RugbyClubManagementApi.Core.Models
{
    public class Team
    {
        public Guid TeamId { get; set; }
        public string Name { get; set; }

        // Navigation properties
        public ICollection<TeamCoach> TeamCoaches { get; set; } // Many-to-many relationship with Coach
    }
}

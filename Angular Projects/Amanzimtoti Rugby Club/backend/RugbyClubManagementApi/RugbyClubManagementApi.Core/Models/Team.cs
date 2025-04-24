using System;

namespace RugbyClubManagementApi.Core.Models
{
    public class Team
    {
        public Guid TeamId { get; set; }
        public string Name { get; set; } = default!;

        // Navigation properties
        public ICollection<TeamCoach> TeamCoaches { get; set; } = default!; // Many-to-many relationship with Coach
    }
}

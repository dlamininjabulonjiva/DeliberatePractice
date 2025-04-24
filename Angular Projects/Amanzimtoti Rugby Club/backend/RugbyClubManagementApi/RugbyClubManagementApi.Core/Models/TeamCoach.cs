using System;

namespace RugbyClubManagementApi.Core.Models
{
    public class TeamCoach
    {
        public Guid TeamId { get; set; }
        public Guid CoachId { get; set; }

        // Navigation properties
        public Team Team { get; set; } = default!;
        public Coach Coach { get; set; } = default!;
    }
}

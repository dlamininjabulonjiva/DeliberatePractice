using System;

namespace RugbyClubManagementApi.Core.Models
{
    public class Coach
    {
        public Guid CoachId { get; set; }
        public string FirstName { get; set; } = default!;
        public string LastName { get; set; } = default!;
        public string Email { get; set; } = default!;
        public string PhoneNumber { get; set; } = default!;
        public string BokSmartNumber { get; set; } = default!;
        public string FocusArea { get; set; } = default!; // Coach's FocusArea (e.g., Forwards, Backs, etc.)
        public DateTime JoinDate { get; set; }

        // Navigation property
        public ICollection<TeamCoach> TeamCoaches { get; set; } = default!; // Many-to-many relationship with Team
    }
}

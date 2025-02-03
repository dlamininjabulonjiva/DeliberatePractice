using System;

namespace RugbyClubManagementApi.Core.Models
{
    public class Coach
    {
        public Guid CoachId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string BokSmartNumber { get; set; }
        public string FocusArea { get; set; } // Coach's FocusArea (e.g., Forwards, Backs, etc.)
        public DateTime JoinDate { get; set; }

        // Navigation property
        public ICollection<TeamCoach> TeamCoaches { get; set; } // Many-to-many relationship with Team
    }
}

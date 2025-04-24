using System;

namespace RugbyClubManagementApi.Core.Models
{
    public class Event
    {
        public Guid EventId { get; set; }
        public string Name { get; set; } = default!;
        public string EventType { get; set; } = default!;
        public DateTime EventDate { get; set; }
        public string Location { get; set; } = default!;
        public Guid TeamId { get; set; }
    }
}

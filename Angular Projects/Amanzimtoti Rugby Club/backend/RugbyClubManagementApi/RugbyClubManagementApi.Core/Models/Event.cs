using System;

namespace RugbyClubManagementApi.Core.Models
{
    public class Event
    {
        public Guid EventId { get; set; }
        public string Name { get; set; }
        public string EventType { get; set; }
        public DateTime EventDate { get; set; }
        public string Location { get; set; }
        public Guid TeamId { get; set; }
    }
}

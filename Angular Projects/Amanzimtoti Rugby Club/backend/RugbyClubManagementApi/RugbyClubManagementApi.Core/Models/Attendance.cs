using System;

namespace RugbyClubManagementApi.Core.Models
{
    public  class Attendance
    {
        public Guid Id { get; set; }
        public Guid PlayerId { get; set; }
        public Guid EventId { get; set; }
        public string Status { get; set; }
    }
}

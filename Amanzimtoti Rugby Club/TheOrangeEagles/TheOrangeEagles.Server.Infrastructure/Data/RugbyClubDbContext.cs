using Microsoft.EntityFrameworkCore;
using System.Numerics;
using TheOrangeEagles.Server.Models;

namespace TheOrangeEagles.Server.Data
{
    public class RugbyClubDbContext : DbContext
    {
        public RugbyClubDbContext(DbContextOptions<RugbyClubDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Player> Players { get; set; }
    }
}

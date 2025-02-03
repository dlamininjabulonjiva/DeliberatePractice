using Microsoft.EntityFrameworkCore;
using RugbyClubManagementApi.Core.Models;

namespace RugbyClubManagementApi.Infrastructure.Data
{
    public class RugbyClubDbContext : DbContext
    {
        public RugbyClubDbContext(DbContextOptions<RugbyClubDbContext> options) : base(options) { }

        public DbSet<Admin> Admins { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Coach> Coaches { get; set; }
        public DbSet<TeamCoach> TeamCoaches { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Event> Attendances { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure the many-to-many relationship between Team and Coach
            modelBuilder.Entity<TeamCoach>()
                .HasKey(teamCoach => new { teamCoach.TeamId, teamCoach.CoachId });

            modelBuilder.Entity<TeamCoach>()
                .HasOne(teamCoach => teamCoach.Team)
                .WithMany(team => team.TeamCoaches)
                .HasForeignKey(teamCoach => teamCoach.TeamId);

            modelBuilder.Entity<TeamCoach>()
                .HasOne(teamCoach => teamCoach.Coach)
                .WithMany(coach => coach.TeamCoaches)
                .HasForeignKey(teamCoach => teamCoach.CoachId);
        }
    }
}

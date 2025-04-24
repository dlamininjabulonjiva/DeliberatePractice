using Microsoft.EntityFrameworkCore;
using RugbyClubManagementApi.Core.Models;

namespace RugbyClubManagementApi.Infrastructure.Data
{
    public class RugbyClubDbContext : DbContext
    {
        public RugbyClubDbContext(DbContextOptions<RugbyClubDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Coach> Coaches { get; set; }
        public DbSet<TeamCoach> TeamCoaches { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Attendance> Attendances { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure the many-to-many relationship between Team and Coach
            modelBuilder.Entity<TeamCoach>()
                .HasKey(entity => new { entity.TeamId, entity.CoachId });

            modelBuilder.Entity<TeamCoach>()
                .HasOne(entity => entity.Team)
                .WithMany(entity => entity.TeamCoaches)
                .HasForeignKey(entity => entity.TeamId);

            modelBuilder.Entity<TeamCoach>()
                .HasOne(entity => entity.Coach)
                .WithMany(entity => entity.TeamCoaches)
                .HasForeignKey(entity => entity.CoachId);
            
            modelBuilder.Entity<User>(adminEntity =>
            {
                adminEntity.HasKey(entity => entity.Id);
                adminEntity.Property(entity => entity.FirstName).IsRequired().HasMaxLength(50);
                adminEntity.Property(entity => entity.LastName).IsRequired().HasMaxLength(50);
                adminEntity.Property(entity => entity.Username).IsRequired().HasMaxLength(100);
                adminEntity.Property(entity => entity.PasswordHash).IsRequired().HasMaxLength(255);
                adminEntity.Property(entity => entity.PasswordSalt).IsRequired().HasMaxLength(255);
                adminEntity.Property(entity => entity.IsActive).HasDefaultValue(true);
            });
        }
    }
}

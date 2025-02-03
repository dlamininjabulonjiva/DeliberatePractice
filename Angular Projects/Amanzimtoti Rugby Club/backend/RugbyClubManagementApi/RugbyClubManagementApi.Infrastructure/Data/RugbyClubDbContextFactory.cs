using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;

namespace RugbyClubManagementApi.Infrastructure.Data
{
    public class RugbyClubDbContextFactory : IDesignTimeDbContextFactory<RugbyClubDbContext>
    {
        public RugbyClubDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<RugbyClubDbContext>();
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=RugbyClubDb;Username=admin;Password=password");

            return new RugbyClubDbContext(optionsBuilder.Options);
        }
    }
}

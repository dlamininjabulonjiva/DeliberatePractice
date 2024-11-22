using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheOrangeEagles.Server.Data;

namespace TheOrangeEagles.Server.Infrastructure.Data
{
    public class RugbyClubDbContextFactory : IDesignTimeDbContextFactory<RugbyClubDbContext>
    {
        public RugbyClubDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<RugbyClubDbContext>();
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=rugby_club;Username=admin;Password=password");

            return new RugbyClubDbContext(optionsBuilder.Options);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using TheOrangeEagles.Server.Core.Repository;
using TheOrangeEagles.Server.Data;
using TheOrangeEagles.Server.Infrastructure.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add EF Core with PostgreSQL
builder.Services.AddDbContext<RugbyClubDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("RugbyClubDB")));
builder.Services.AddScoped<IUserRepository, UserRepository>();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();

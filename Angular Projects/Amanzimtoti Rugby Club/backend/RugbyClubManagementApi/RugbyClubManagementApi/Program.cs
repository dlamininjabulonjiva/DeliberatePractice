using Microsoft.EntityFrameworkCore;
using RugbyClubManagementApi.Core.Repositories;
using RugbyClubManagementApi.Infrastructure.Data;
using RugbyClubManagementApi.Infrastructure.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Register repositories
builder.Services.AddScoped<IUserManagementRepository, UserManagementRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add EF Core with PostgreSQL
builder.Services.AddDbContext<RugbyClubDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("RugbyClubDb")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

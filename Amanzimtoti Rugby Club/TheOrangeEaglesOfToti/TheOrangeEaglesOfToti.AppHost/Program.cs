var builder = DistributedApplication.CreateBuilder(args);

var cache = builder.AddRedis("cache");

var apiService = builder.AddProject<Projects.TheOrangeEaglesOfToti_ApiService>("apiservice");

var username = builder.AddParameter("user", secret: true, value: "postgres");
var password = builder.AddParameter("password", secret: true, value: "postgres");

var postgresServer = builder.AddPostgres("postgres", username, password);
var progressionFrameworkDb = postgresServer.AddDatabase("TheOrangeEagleDB");

builder.AddProject<Projects.TheOrangeEaglesOfToti_Web>("webfrontend")
    .WithExternalHttpEndpoints()
    .WithReference(cache)
    .WaitFor(cache)
    .WithReference(apiService)
    .WaitFor(apiService);

builder.Build().Run();

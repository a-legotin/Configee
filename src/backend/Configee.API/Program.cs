using Configee.API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSingleton<UsersDb>();
builder.Services.AddSingleton<UsersAuth>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(corsPolicyBuilder => corsPolicyBuilder
        .WithOrigins("http://localhost:3001")
        .AllowCredentials()
        .AllowAnyMethod()
        .AllowAnyHeader());
}

app.UseAuthentication();
app.MapControllers();
app.Run();
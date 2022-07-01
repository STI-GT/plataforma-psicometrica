using API;
using API.Extensions;
using Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Oracle.ManagedDataAccess.Client;
using Persistence;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

IConfiguration _config = builder.Configuration;

// Add services to the container.
#region Services

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Adds sqLite services to container from /Extensions/
builder.Services.AddSqLiteServiceExtension(_config);
//Adds sqlite services to container from /Extensions/
//builder.Services.AddOracleServiceExtension(_config);

//Adds authentication policies and services to container
builder.Services.AddIdentityServiceExtension(_config);
#endregion Services

WebApplication app = builder.Build();

//Creates a services scope
IServiceScope scope = app.Services.CreateScope();
//Sets services provider from scope
IServiceProvider serviceProvider = scope.ServiceProvider;
//Creates a user manager to use globally from this startup class
UserManager<Evaluador> userManager = serviceProvider.GetRequiredService<UserManager<Evaluador>>();
//Creates data context, the abstraction for EF from database
DataContext context = serviceProvider.GetRequiredService<DataContext>();
//creating migrations automatically
try
{
    if (await context.Database.EnsureCreatedAsync()) // returns true if database is not created yet
    {
        Console.WriteLine("La base de datos no esta creada");
        await context.Database.MigrateAsync(); //Creates database and migrates entities from persistence
        
    }else
    {
        Console.WriteLine("La base de datos ya esta creada");
    }
}
catch (OracleException ex) //used in case of Oracle extension used
{
    Console.WriteLine("Error de la base de datos: \n" + ex.ToString());
    Console.WriteLine("Error desde: " + ex.StackTrace?.ToString());
    Console.WriteLine(ex.DataSource?.ToString());
}
catch(Exception ex){ //General error handler
    Console.WriteLine("Error: \n" + ex.Message.ToString());
    Console.WriteLine("Error en el proceso: \n" + ex.ToString());
    Console.WriteLine("Error desde: " + ex.StackTrace?.ToString());
}
finally{
    await Seed.AddUsers(context,userManager); //Creates temporary users
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication(); //Enable user claims with AspNetCore Identity
app.UseAuthorization(); //Enables Jwt tokens bearer

app.MapControllers();
app.Run("http://192.168.0.150:7001");

using API.Services;
using Domain.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Persistence;

namespace API.Extensions
{
    public static class IdentityExtension
    {
        public static IServiceCollection AddIdentityServiceExtension(this IServiceCollection services, IConfiguration config){
            //Adds Identity services to container
            services.AddIdentityCore<Evaluador>(
                options => {
                    options.Password.RequireDigit = false;
                    options.Password.RequiredLength = 4;
                    options.Password.RequireUppercase = false;
                    options.Password.RequireNonAlphanumeric = false;
                    options.User.RequireUniqueEmail = true;
                }
            ).AddEntityFrameworkStores<DataContext>().AddSignInManager<SignInManager<Evaluador>>();
            

            //Adds token services to container
            TokenService tService = new TokenService();
            
            services.AddScoped<TokenService>(); //We can use this services
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer( //Adds Jwt bearer validation to container
                options => {
                    options.TokenValidationParameters = new TokenValidationParameters{
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = tService.Key,
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                }
            ); //Adds Authentication to container

            
            return services;
        }
    }
}
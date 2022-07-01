using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class SqLiteExtension
    {
        /*
        This class provides the methods to add SqLite services to container
        */
        public static IServiceCollection AddSqLiteServiceExtension(this IServiceCollection services, IConfiguration config){
            services.AddDbContext<DataContext>(
                options => {
                    //Configures connection string
                    options.UseSqlite(config.GetConnectionString("SqLite"));       
                }
            );
            return services;
        }
    }
}
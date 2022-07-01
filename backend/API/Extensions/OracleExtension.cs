using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class OracleExtension
    {
        public static IServiceCollection AddOracleServiceExtension(this IServiceCollection services, IConfiguration config){
            
            services.AddDbContext<DataContext>(
                options => {
                    options.UseOracle(config.GetConnectionString("Oracle"));
                }
            );
            return services;
        }
    }
}
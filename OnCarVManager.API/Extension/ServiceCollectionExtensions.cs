using OnCarVManager.Application.Services;
using OnCarVManager.Domain.Interface;
using OnCarVManager.Infra.Data.Repository;
using OnCarVManager.Infra.Data.Repository.Interface;

namespace OnCarVManager.API.Extension
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddScoped<ICarService, CarService>();
            return services;
        }
        public static IServiceCollection AddRepository(this IServiceCollection services)
        {
            services.AddScoped<ICarRepository, CarRepository>();
            return services;
        }
    }
}

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using OnCarVManager.Domain.Aggregates;

namespace OnCarVManager.Infra.Data.Context
{
    public class OnCarVManagerContext : DbContext
    {
        public DbSet<Car> Cars { get; set; } 
        public DbSet<Simulation> Simulations  { get; set; } 

        public OnCarVManagerContext(DbContextOptions<OnCarVManagerContext> options) : base(options)
        {

        }

        
    }
}

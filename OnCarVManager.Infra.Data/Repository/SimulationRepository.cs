using OnCarVManager.Application.Abstraction.Repository;
using OnCarVManager.Domain.Aggregates;
using OnCarVManager.Infra.Data.Context;
using OnCarVManager.Infra.Data.Repository.Interface;

namespace OnCarVManager.Infra.Data.Repository
{
    public class SimulationRepository : Repository<Simulation>, ISimulationRepository
    {
        public SimulationRepository(OnCarVManagerContext context) : base(context)
        {
        }
    }
}

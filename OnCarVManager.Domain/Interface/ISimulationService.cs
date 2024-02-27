using OnCarVManager.Domain.Aggregates;
using OnCarVManager.Domain.Response;

namespace OnCarVManager.Domain.Interface
{
    public interface ISimulationService
    {
        Task<SimulationResponse> AddSimulation(Simulation simulation);
    }
}

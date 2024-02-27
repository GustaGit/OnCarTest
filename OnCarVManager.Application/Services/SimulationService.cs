using OnCarVManager.Domain.Aggregates;
using OnCarVManager.Domain.Interface;
using OnCarVManager.Domain.Response;
using OnCarVManager.Infra.Data.Repository.Interface;

namespace OnCarVManager.Application.Services
{
    public class SimulationService : ISimulationService
    {
        private readonly ISimulationRepository _simulationRepository;
        public SimulationService(ISimulationRepository simulationRepository)
        {
            _simulationRepository = simulationRepository;
        }
        public async Task<SimulationResponse> AddSimulation(Simulation simulation)
        {
            await _simulationRepository.AddAsync(simulation);
            Random rnd = new();
            int score = rnd.Next(1, 999);

            return new SimulationResponse
            {
                DocumentCPF = simulation.DocumentCPF,
                Birthdate = simulation.Birthdate,
                CarPrice = simulation.Price,
                Email = simulation.Email,
                FamilyIncome = simulation.FamilyIncome,
                Phone = simulation.Phone,
                Score = score
            };
        }
    }
}

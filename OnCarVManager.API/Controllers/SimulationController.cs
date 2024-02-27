using Microsoft.AspNetCore.Mvc;
using OnCarVManager.Domain.Aggregates;
using OnCarVManager.Domain.Interface;
using OnCarVManager.Domain.Response;

namespace OnCarVManager.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SimulationController:ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<SimulationResponse>> AddSimulation([FromServices] ISimulationService service, Simulation simulation)
        {
            try
            {
                var simulationResponse = await service.AddSimulation(simulation);
                return Ok(simulationResponse);
            }
            catch (Exception)
            {
                return BadRequest("Erro ao adicionar uma Simulação");
            }
        }
    }
}

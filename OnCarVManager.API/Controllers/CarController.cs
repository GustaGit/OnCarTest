using Microsoft.AspNetCore.Mvc;
using OnCarVManager.Domain.Aggregates;
using OnCarVManager.Domain.Interface;

namespace OnCarVManager.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Car>>> GetAllCars([FromServices] ICarService service)
        {
            try
            {
                var cars = await service.GetAllCars();
                return Ok(cars);
            }
            catch (Exception)
            {
                return BadRequest("Erro ao buscar os veículos");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Car>> GetCarById([FromServices] ICarService service, int id)
        {
            try
            {
                var car = await service.GetCarById(id);
                return Ok(car);
            }
            catch (Exception)
            {
                return BadRequest("Erro ao buscar um veículo");
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddCar([FromServices] ICarService service, Car car)
        {
            if (car == null) return BadRequest("Dados Inválidos");

            try
            {
                await service.AddCar(car);
                return Ok("Veículo adicionado com Sucesso");
            }
            catch (Exception)
            {
                return BadRequest("Dados Inválidos");
            }
        }

        [HttpDelete]
        public async Task<IActionResult> RemoveCar([FromServices]ICarService service, int id)
        {
            if (id <= 0) return BadRequest("Veículo inválido");
            try
            {
                await service.RemoveCar(id);
                return Ok("Veículo removido com sucesso");
            }
            catch (Exception)
            {
                return BadRequest("Veículo Inválido");
            }
        }

        
    }
}

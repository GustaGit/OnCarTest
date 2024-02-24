using Microsoft.AspNetCore.Mvc;
using OnCarVManager.Domain.Aggregates;
using OnCarVManager.Domain.Interface;
using OnCarVManager.Domain.Response;

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
            catch (Exception ex)
            {
                return BadRequest(ex);
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
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddCar([FromServices] ICarService service, Car car)
        {
            try
            {
                await service.AddCar(car);
                return Ok(true);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> RemoveCar([FromServices]ICarService service, int id)
        {
            try
            {
                await service.RemoveCar(id);
                return Ok(true);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        
    }
}

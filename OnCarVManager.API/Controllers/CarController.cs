using Microsoft.AspNetCore.Mvc;
using OnCarVManager.Domain.Interface;
using OnCarVManager.Domain.Response;

namespace OnCarVManager.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<CarResponse>>> GetAll([FromServices] ICarService service)
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

        [HttpPost]
        public async Task<IActionResult> Post()
        {
            try
            {
                return Ok(true);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Delete()
        {
            try
            {
                return Ok(true);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Put()
        {
            try
            {
                return Ok(true);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}

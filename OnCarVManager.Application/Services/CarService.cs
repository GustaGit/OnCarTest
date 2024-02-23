using OnCarVManager.Domain.Interface;
using OnCarVManager.Domain.Request;
using OnCarVManager.Domain.Response;

namespace OnCarVManager.Application.Services
{
    public class CarService : ICarService
    {
        public async Task<List<CarResponse>> GetAllCars()
        {
            throw new NotImplementedException();
        }

        public async Task<bool> AddCar(CarRequest request)
        {
            throw new NotImplementedException();
        }

        public async Task<CarResponse> GetCarById(int carId)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> RemoveCar(int carId)
        {
            throw new NotImplementedException();
        }
    }
}

using OnCarVManager.Domain.Aggregates;
using OnCarVManager.Domain.Interface;
using OnCarVManager.Infra.Data.Repository.Interface;

namespace OnCarVManager.Application.Services
{
    public class CarService : ICarService
    {
        private readonly ICarRepository _carRepository;

        public CarService(ICarRepository carRepository)
        {
            _carRepository = carRepository;
        }

        public async Task<IEnumerable<Car>> GetAllCars()
        {
            return await _carRepository.GetAllAsync();
        }
        public async Task<Car?> GetCarById(int carId)
        {
            return await _carRepository.GetByIdAsync(carId);
        }

        public async Task<bool> AddCar(Car car)
        {
            return await _carRepository.AddAsync(car);
        }

        public async Task<bool> RemoveCar(int carId)
        {
            return await _carRepository.Delete(carId);
        }
    }
}

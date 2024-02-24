using OnCarVManager.Domain.Aggregates;
using OnCarVManager.Domain.Request;
using OnCarVManager.Domain.Response;

namespace OnCarVManager.Domain.Interface
{
    public interface ICarService
    {
        Task<IEnumerable<Car>> GetAllCars();
        Task<Car?> GetCarById(int carId);
        Task<bool> AddCar(Car car);
        Task<bool> RemoveCar(int carId);

    }
}

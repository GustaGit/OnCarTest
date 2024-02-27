using OnCarVManager.Domain.Aggregates;
using OnCarVManager.Domain.Request;
using OnCarVManager.Domain.Response;

namespace OnCarVManager.Domain.Interface
{
    public interface ICarService
    {
        Task<IEnumerable<Car>> GetAllCars();
        Task<Car?> GetCarById(int carId);
        Task<IEnumerable<Car>> AddCar(Car car);
        Task<IEnumerable<Car>> RemoveCar(int carId);

    }
}

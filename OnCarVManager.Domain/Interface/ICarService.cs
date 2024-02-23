using OnCarVManager.Domain.Request;
using OnCarVManager.Domain.Response;

namespace OnCarVManager.Domain.Interface
{
    public interface ICarService
    {
        Task<List<CarResponse>> GetAllCars();
        Task<CarResponse> GetCarById(int carId);
        Task<bool> AddCar(CarRequest request);
        Task<bool> RemoveCar(int carId);

    }
}

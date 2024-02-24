using OnCarVManager.Domain.Aggregates;
using OnCarVManager.Domain.Request;
using OnCarVManager.Domain.Response;

namespace OnCarVManager.Infra.Data.Repository.Interface
{
    public interface ICarRepository : IRepository<Car>
    {
    }
}

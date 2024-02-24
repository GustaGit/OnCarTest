using OnCarVManager.Application.Abstraction.Repository;
using OnCarVManager.Domain.Aggregates;
using OnCarVManager.Domain.Request;
using OnCarVManager.Domain.Response;
using OnCarVManager.Infra.Data.Context;
using OnCarVManager.Infra.Data.Repository.Interface;

namespace OnCarVManager.Infra.Data.Repository
{
    public class CarRepository : Repository<Car>, ICarRepository
    {
        public CarRepository(OnCarVManagerContext context) : base(context)
        {
        }
    }
}

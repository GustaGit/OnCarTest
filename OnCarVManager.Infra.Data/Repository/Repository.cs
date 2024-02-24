using Microsoft.EntityFrameworkCore;
using OnCarVManager.Infra.Data.Context;
using OnCarVManager.Infra.Data.Repository.Interface;
using System.Collections.Generic;

namespace OnCarVManager.Application.Abstraction.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        protected readonly DbContext _context;
        protected readonly DbSet<T> _dbSet;

        public Repository(DbContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        public virtual async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbSet.AsNoTracking().ToListAsync();
        }

        public virtual async Task<T?> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public Task<bool> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> AddAsync(T entity)
        {
            throw new NotImplementedException();
        }


        public Task<bool> Update(T entity)
        {
            throw new NotImplementedException();
        }
    }
}

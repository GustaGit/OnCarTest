using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnCarVManager.Domain.Aggregates;

namespace OnCarVManager.Infra.Data.Configurations
{
    public class CarConfiguration : IEntityTypeConfiguration<Car>
    {
        public void Configure(EntityTypeBuilder<Car> builder)
        {
            builder.ToTable(nameof(Car));

            builder.HasKey(x => x.id);
            builder.Property(x => x.id)
               .HasColumnType("int")
               .ValueGeneratedOnAdd()
               .IsRequired();

            builder.Property(x => x.brand)
                .HasColumnType("varchar")
                .HasMaxLength(30)
                .IsRequired();

            builder.Property(x => x.model)
                .HasColumnType("varchar")
                .HasMaxLength(40)
                .IsRequired();
        }
    }
}

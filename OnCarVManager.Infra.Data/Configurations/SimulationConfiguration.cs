using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnCarVManager.Domain.Aggregates;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnCarVManager.Infra.Data.Configurations
{
    internal class SimulationConfiguration : IEntityTypeConfiguration<Simulation>
    {
        public void Configure(EntityTypeBuilder<Simulation> builder)
        {
            builder.ToTable(nameof(Simulation));

            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
               .HasColumnType("int")
               .ValueGeneratedOnAdd()
               .IsRequired();

            builder.Property(x => x.DocumentCPF)
                .HasColumnType("varchar")
                .HasMaxLength(11)
                .IsRequired();

            builder.Property(x => x.Price)
                .HasColumnType("int")
                .HasMaxLength(40)
                .IsRequired(); 
            
            builder.Property(x => x.Birthdate)
                .HasColumnType("date")
                .IsRequired();

            builder.Property(x => x.FamilyIncome)
               .HasColumnType("int")
               .IsRequired();

            builder.Property(x => x.Email)
               .HasColumnType("varchar")
                .HasMaxLength(11)
                .IsRequired();
        }
    }
}

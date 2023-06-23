using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Expenses.DB
{
    public  class AppDbContext : DbContext
    {
        public DbSet<Expense> Expenses { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"server=localhost;database=ExpensesDb; Integrated Security=true; MultipleActiveResultSets=true; TrustServerCertificate=true;");
        }
    }
}

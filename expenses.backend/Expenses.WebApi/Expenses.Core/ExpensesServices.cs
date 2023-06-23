using ExpensesDB;

namespace Expenses.Core
{
    public class ExpensesServices : IExpensesServices
    {
        //create constructor for context to access the database
        private AppDbContext _context;
        public ExpensesServices(AppDbContext context)
        {
            _context = context;
        }
        public List<Expense> GetExpenses()
        {
            return _context.Expenses.ToList();
        }
    }
}
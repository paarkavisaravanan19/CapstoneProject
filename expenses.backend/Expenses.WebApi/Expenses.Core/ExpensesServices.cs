using ExpensesDB;

namespace Expenses.Core
{
    public class ExpensesServices : IExpensesServices
    {
        //create constructor for context to access the database
        private AppDbContext _context;
        public ExpensesServices(AppDbContext context)
        {
            //dependency injection through instance of dbcontext
            _context = context;
        }
        public List<Expense> GetExpenses()
        {
            return _context.Expenses.ToList();
        }
    }
}
using Expenses.DB;

namespace Expenses.Core
{
    public class ExpensesServices : IExpensesServices
    {
        //creating constructor
        private AppDbContext _context;
        public ExpensesServices(AppDbContext context)
        {
            //dependemcy injection used to show instance of dbcontext
            _context = context;
        }

        public List<Expense> GetExpenses()
        {
            return _context.Expenses.ToList();
        }
    }
}
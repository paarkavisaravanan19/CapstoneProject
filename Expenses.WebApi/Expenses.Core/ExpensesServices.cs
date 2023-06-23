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

        public Expense GetExpense(int id)
        {
            //gets first id that gets matched
            return _context.Expenses.First(e => e.Id == id);
        }

        public List<Expense> GetExpenses()
        {
            return _context.Expenses.ToList();
        }
    }
}
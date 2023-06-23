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
        //creating expense
        public Expense CreateExpense(Expense expense)
        {
            _context.Add(expense);
            _context.SaveChanges();

            return expense;
        }
        //get expense using id
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
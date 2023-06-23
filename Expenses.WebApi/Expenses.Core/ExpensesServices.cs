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

        public void DeleteExpense(Expense expense)
        {
            _context.Expenses.Remove(expense);
            _context.SaveChanges();
        }

        public Expense EditExpense(Expense expense)
        {
            var dbExpense = _context.Expenses.First(e => e.Id== expense.Id);
            dbExpense.Description= expense.Description;
            dbExpense.Amount = expense.Amount;
            _context.SaveChanges();
            return dbExpense;
        }

        //get expense using id
        public Expense GetExpense(int id)
        {
            //gets first id that gets matched
            return _context.Expenses.First(e => e.Id == id);
        }
        //get all expenses
        public List<Expense> GetExpenses()
        {
            return _context.Expenses.ToList();
        }
    }
}
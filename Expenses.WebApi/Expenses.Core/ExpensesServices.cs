using Expenses.DB;
using Microsoft.AspNetCore.Http;

namespace Expenses.Core
{
    public class ExpensesServices : IExpensesServices
    {
        //creating constructor
        private AppDbContext _context;
        private readonly DB.User _user;
        public ExpensesServices(AppDbContext context, IHttpContextAccessor httpContextAccessor)
        {
            //dependemcy injection used to show instance of dbcontext
            _context = context;
            _user = _context.Users.First(u => u.Username == httpContextAccessor.HttpContext.User.Identity.Name);

        }
        //creating expense
        public Expense CreateExpense(DB.Expense expense)
        {
            expense.User = _user;
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
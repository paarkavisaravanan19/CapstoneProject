
using Expenses.Core.DTO;
using Microsoft.AspNetCore.Http;

namespace Expenses.Core
{
    public class ExpensesServices : IExpensesServices
    {
        //creating constructor
        private DB.AppDbContext _context;
        private readonly DB.User _user;
        public ExpensesServices(DB.AppDbContext context, IHttpContextAccessor httpContextAccessor)
        {
            //dependemcy injection used to show instance of dbcontext
            _context = context;
            _user = _context.Users.First(u => u.Username == httpContextAccessor.HttpContext.User.Identity.Name);

        }
        //creating expense
        public CoreExpense CreateExpense(DB.Expense expense)
        {
            expense.User = _user;
            _context.Add(expense);
            _context.SaveChanges();

            return (CoreExpense)expense;
        }

        public void DeleteExpense(CoreExpense expense)
        {
            //to prevent someone's misaction with authorized token 
            var dbExpense = _context.Expenses.First(e => e.User.Id == _user.Id && e.Id == expense.Id);
            _context.Expenses.Remove(dbExpense);
            _context.SaveChanges();
        }

        public CoreExpense EditExpense(CoreExpense expense)
        {
            var dbExpense = _context.Expenses.First(e => e.User.Id == _user.Id && e.Id == expense.Id);
            dbExpense.Description= expense.Description;
            dbExpense.Amount = expense.Amount;
            _context.SaveChanges();
            return expense;
        }

        //get expense using id
        public CoreExpense GetExpense(int id) =>
            _context.Expenses
            .Where(e => e.User.Id == _user.Id && e.Id == id)
            .Select(e => (CoreExpense)e)
            .First();
        
        //get all expenses
        public List<CoreExpense> GetExpenses() =>
            _context.Expenses.Where(e => e.User.Id == _user.Id).Select(e => (CoreExpense)e).ToList();

    }
}
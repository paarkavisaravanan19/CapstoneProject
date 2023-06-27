
using Expenses.Core.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Expenses.Core
{
    public interface IExpensesServices
    {
        List<CoreExpense> GetExpenses();
        CoreExpense GetExpense(int id);
        CoreExpense CreateExpense(DB.Expense expense);
        void DeleteExpense(CoreExpense expense);
        CoreExpense EditExpense(CoreExpense expense);
    }
}

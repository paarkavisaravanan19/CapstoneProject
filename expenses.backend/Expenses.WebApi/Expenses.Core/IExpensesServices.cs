using ExpensesDB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Expenses.Core
{
    //to access the table for endpoint
    public interface IExpensesServices
    {
        List<Expense> GetExpenses();
    }
}

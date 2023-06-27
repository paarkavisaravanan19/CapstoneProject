

namespace Expenses.Core.DTO
{
    public class CoreExpense
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public double Amount { get; set; }

        public static explicit operator CoreExpense(DB.Expense e) => new CoreExpense
        {
            Id = e.Id,
            Amount = e.Amount,
            Description = e.Description
        };
    }
}

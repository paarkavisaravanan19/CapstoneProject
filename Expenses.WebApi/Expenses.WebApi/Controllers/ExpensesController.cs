using Expenses.Core;
using Microsoft.AspNetCore.Mvc;

namespace Expenses.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExpensesController : ControllerBase
    {
        private IExpensesServices _expensesServices;
        public ExpensesController(IExpensesServices expensesServices)
        {
            //dependency injection
            _expensesServices = expensesServices;
        }
        [HttpGet]
        public IActionResult GetExpenses()
        {
            return Ok(_expensesServices.GetExpenses());
        }

        
    }
}
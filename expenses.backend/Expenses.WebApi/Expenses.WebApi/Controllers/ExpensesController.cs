using Microsoft.AspNetCore.Mvc;

namespace Expenses.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExpensesController : ControllerBase
    {
        

        
        public ExpensesController()
        {
            
        }
        [HttpGet]
        public IActionResult GetExpenses()
        {

        }

        
    }
}
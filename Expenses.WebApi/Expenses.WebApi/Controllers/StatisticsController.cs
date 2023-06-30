using Expenses.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Expenses.WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class StatisticsController : ControllerBase
    {
        //inject the service
        private readonly IStatisticsServices _statisticsService;

        public StatisticsController(IStatisticsServices statisticsService)
        {
            _statisticsService = statisticsService;
        }

        [HttpGet]
        public IActionResult GetExpenseAmountPerCategory()
        {
            return Ok(_statisticsService.GetExpenseAmountPerCategory());
        }
    }
}

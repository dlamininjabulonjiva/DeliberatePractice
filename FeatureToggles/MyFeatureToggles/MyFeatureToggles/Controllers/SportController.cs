using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.FeatureManagement;
using Microsoft.FeatureManagement.Mvc;

namespace MyFeatureToggles.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class SportController : Controller
  {
    private readonly IFeatureManager _featureManager;

    public SportController(IFeatureManager featureManager)
    {
      _featureManager = featureManager;
    }

    [HttpGet("news")]
    [FeatureGate("SportNewsEnabled")]
    public string GetSportNews()
    {
      const string news = "The Springboks have beaten the British & Irish Lions " +
                          "by 19 points to 16. It was a tough match but guys like " +
                          "Franco Mostert, Lukhanyo AM, Cheslin Kolbe and Lood de Jager were at the top of their game";
      return news;
    }

    [HttpGet("fixture")]
    public async Task<string> GetFixture()
    {
      var isGameOnASaturday = await _featureManager.IsEnabledAsync("SaturdayGameEnabled");
      var matchDay = isGameOnASaturday ? "Game will be played on a Saturday" : "Game will be played on a Sunday";
      return matchDay;
    }
  }
}

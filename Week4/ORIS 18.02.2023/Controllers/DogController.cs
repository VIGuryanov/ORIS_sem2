using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ORIS_18._02._2023.Models;

namespace ORIS_18._02._2023.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DogController : Controller
    {
        // GET: HomeController
        [HttpGet]
        public IEnumerable<DogShortInfo> GetAll()
        {
            return JsonParser.DogsInfo.Item2;
        }

        // GET: HomeController/Details/5
        [HttpGet("{id}")]
        public Dog GetById(Guid id)
        {
            return JsonParser.DogsInfo.Item1[id];
        }

        [HttpGet("{from}/{to}")]
        public IEnumerable<DogShortInfo> GetSlice(int from, int to)
        {
            return JsonParser.DogsInfo.Item2[from..to];
        }

        [HttpGet("{foption}/{ffrom}/{fto}")]
        public IEnumerable<DogShortInfo> GetAllFiltered(int foption, int ffrom, int fto)
        {
            switch(foption)
            {
                case 0:
                  return JsonParser.DogsInfo.Item2;
                case 1:
                  return JsonParser.DogsInfo.Item1.Where(x=> x.Value.Weight >= ffrom && x.Value.Weight <= fto).OrderBy(x => x.Value.Weight).Select(x=>new DogShortInfo(x.Value.Id, x.Value.Family.Name, x.Value.ImgUrl));
                case 2:
                  return JsonParser.DogsInfo.Item1.Where(x=> x.Value.Height >= ffrom && x.Value.Height <= fto).OrderBy(x => x.Value.Height).Select(x=>new DogShortInfo(x.Value.Id, x.Value.Family.Name, x.Value.ImgUrl));
                case 3:
                  return JsonParser.DogsInfo.Item1.Where(x=> x.Value.Age >= ffrom && x.Value.Age <= fto).OrderBy(x => x.Value.Age).Select(x=>new DogShortInfo(x.Value.Id, x.Value.Family.Name, x.Value.ImgUrl));
                default:
                    return null;
            }
        }
    }
}

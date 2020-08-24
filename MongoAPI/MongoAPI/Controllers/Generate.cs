using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MongoAPI.Controllers
{
  [Route("/api/RandomNumber")]
  public class Generate : Controller
  {
      [HttpGet]
      [Route("Generate")]
      public ActionResult<Int32> Generates()
      {
          var r = new Random();
          return r.Next(0, 1000);
      }
  }
}

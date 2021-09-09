using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace MyCompanyEmployees.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class EmployeesController : ControllerBase
  {
    [HttpGet("managers")]
    public IEnumerable<Employee> GetManagers()
    {
      var managers = new[]
      {
        new Employee {Id = 1, Name = "Pep", Surname = "Guardiola", Email = "pep@test.co.za", PhoneNumber = "0789056532"},
        new Employee {Id = 2, Name = "Thomas", Surname = "Tuchel", Email = "thomas@test.co.za", PhoneNumber = "0827144432"},
        new Employee {Id = 3, Name = "Ole Gunnar", Surname = "Solskjaer", Email = "ole@test.co.za", PhoneNumber = "0617509638"},
        new Employee {Id = 1, Name = "Mikel", Surname = "Arteta", Email = "mikel@test.co.za", PhoneNumber = "0837529865"}
      };
      return managers;
    }

    [HttpGet("seniors")]
    public IEnumerable<Employee> GetSeniorDevelopers()
    {
      var seniorDevelopers = new[]
      {
        new Employee {Id = 1, Name = "Cristiano", Surname = "Ronaldo", Email = "cristiano@test.co.za", PhoneNumber = "0787054126"},
        new Employee {Id = 2, Name = "Lionel", Surname = "Messi", Email = "lionel@test.co.za", PhoneNumber = "0717054165"},
        new Employee {Id = 3, Name = "Andres", Surname = "Iniesta", Email = "andres@test.co.za", PhoneNumber = "0725054165"},
        new Employee {Id = 4, Name = "Luca", Surname = "Modric", Email = "luca@test.co.za", PhoneNumber = "0625084165"},
        new Employee {Id = 5, Name = "Wayne", Surname = "Roony", Email = "wayne@test.co.za", PhoneNumber = "0635014165"},
        new Employee {Id = 6, Name = "Didier", Surname = "Drogba", Email = "didier@test.co.za", PhoneNumber = "0815014165"},
        new Employee {Id = 7, Name = "Sergio", Surname = "Ramos", Email = "sergio@test.co.za", PhoneNumber = "0735634560"},
      };
      return seniorDevelopers;
    }

    [HttpGet("juniors")]
    public IEnumerable<Employee> GetJuniorDevelopers()
    {
      var juniorDevelopers = new[]
      {
        new Employee {Id = 1, Name = "Junior", Surname = "Neymar", Email = "jr@test.co.za", PhoneNumber = "0717074126"},
        new Employee {Id = 2, Name = "Kylian", Surname = "Mbappe", Email = "kylian@test.co.za", PhoneNumber = "0762054145"},
        new Employee {Id = 3, Name = "Paul", Surname = "Pogba", Email = "paul@test.co.za", PhoneNumber = "0815053565"},
        new Employee {Id = 4, Name = "Eden", Surname = "Hazard", Email = "eden@test.co.za", PhoneNumber = "0622684105"},
        new Employee {Id = 5, Name = "Kevin", Surname = "De Bruyne", Email = "kevin@test.co.za", PhoneNumber = "0734132255"},
        new Employee {Id = 6, Name = "Jack", Surname = "Greelish", Email = "jack@test.co.za", PhoneNumber = "0816084145"},
        new Employee {Id = 7, Name = "Romelu", Surname = "Lukaku", Email = "romelu@test.co.za", PhoneNumber = "0712044645"},
        new Employee {Id = 8, Name = "Raheem", Surname = "Sterling", Email = "raheem@test.co.za", PhoneNumber = "0619043741"},
        new Employee {Id = 9, Name = "Kai", Surname = "Havertz", Email = "kai@test.co.za", PhoneNumber = "0787156631"},
        new Employee {Id = 10, Name = "Bruno", Surname = "Fernandes", Email = "bruno@test.co.za", PhoneNumber = "0826529781"},
      };
      return juniorDevelopers;
    }
  }
}

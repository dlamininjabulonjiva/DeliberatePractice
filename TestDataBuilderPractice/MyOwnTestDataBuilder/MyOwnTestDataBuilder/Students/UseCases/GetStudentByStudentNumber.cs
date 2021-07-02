using System.Collections.Generic;
using System.Linq;
using MyOwnTestDataBuilder.Model;

namespace MyOwnTestDataBuilder.Students.UseCases
{
  public class GetStudentByStudentNumber : IGetStudentByStudentNumber
  {
    public Student Execute(List<Student> students, string studentNo)
    {
      var student = students.FirstOrDefault(n => n.StudentNumber == studentNo);
      return student;
    }
  }

  public interface IGetStudentByStudentNumber
  {
    Student Execute(List<Student> students, string studentNo);
  }
}

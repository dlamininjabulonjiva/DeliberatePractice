using System;
using System.Collections.Generic;
using System.Text;

namespace MyOwnTestDataBuilder.Model
{
  public class Student
  {
    public string StudentNumber { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public Address HomeAddress { get; set; }
    public int Age { get; set; }

    public Student(string studentNumber, string firstName, string lastName, Address homeAddress, int age)
    {
      StudentNumber = studentNumber;
      FirstName = firstName;
      LastName = lastName;
      HomeAddress = homeAddress;
      Age = age;
    }
  }
}

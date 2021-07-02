using System;
using System.Collections.Generic;
using System.Text;
using MyOwnTestDataBuilder.Model;

namespace MyOwnTestDataBuilder.Test.Builders
{
  public class StudentTestDataBuilder
  {
    private string _studentNumber;
    private string _firstName;
    private string _lastName;
    private Address _homeAddress;
    private int _age;

    public StudentTestDataBuilder WithStudentNumber(string studentNumber)
    {
      _studentNumber = studentNumber;
      return this;
    }

    public StudentTestDataBuilder WithFirstName(string firstName)
    {
      _firstName = firstName;
      return this;
    }

    public StudentTestDataBuilder WithLastName(string lastName)
    {
      _lastName = lastName;
      return this;
    }

    public StudentTestDataBuilder WithHomeAddress(Address homeAddress)
    {
      _homeAddress = homeAddress;
      return this;
    }

    public StudentTestDataBuilder WithAge(int age)
    {
      _age = age;
      return this;
    }

    public Student Build()
    {
      return new Student(_studentNumber, _firstName, _lastName, _homeAddress, _age);
    }
  }
}

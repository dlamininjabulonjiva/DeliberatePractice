using System;
using System.Collections.Generic;
using System.Text;
using MyOwnTestDataBuilder.Model;
using MyOwnTestDataBuilder.Students.UseCases;
using MyOwnTestDataBuilder.Test.Builders;
using NUnit.Framework;

namespace MyOwnTestDataBuilder.Test.Students.UseCases
{
  [TestFixture]
  public class TestGetStudentByStudentNumber
  {
    [Test]
    public void GivenStudentNumber_ShouldReturnStudent()
    {
      // Arrange
      const string studentNumber = "21101902";
      var homeAddress1 = new AddressTestDataBuilder().BuildRandom();
      var homeAddress2 = new AddressTestDataBuilder().BuildRandom();
      var homeAddress3 = new AddressTestDataBuilder()
        .WithStreet("3344 Jacobs Road")
        .WithCity("Durban")
        .WithPostalCode(4001)
        .Build();
      var student1 = new StudentTestDataBuilder()
        .WithStudentNumber("21101902")
        .WithFirstName("Danny")
        .WithLastName("Muller")
        .WithHomeAddress(homeAddress1)
        .WithAge(19)
        .Build();
      var student2 = new StudentTestDataBuilder()
        .WithStudentNumber("21101903")
        .WithFirstName("Brook")
        .WithLastName("Miller")
        .WithHomeAddress(homeAddress2)
        .WithAge(21)
        .Build();
      var student3 = new StudentTestDataBuilder()
        .WithStudentNumber("21101904")
        .WithFirstName("Tummy")
        .WithLastName("Jacobs")
        .WithHomeAddress(homeAddress3)
        .WithAge(20)
        .Build();
      var students = new List<Student>()
      {
        student1,
        student2,
        student3
      };
      var sut = new GetStudentByStudentNumber();
      // Act
      var actual = sut.Execute(students, studentNumber);
      // Assert
      Assert.AreEqual(student1,  actual);
    }
  }
}

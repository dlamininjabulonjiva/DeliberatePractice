using System;
using System.Collections.Generic;
using System.Text;
using MyOwnTestDataBuilder.Model;

namespace MyOwnTestDataBuilder.Test.Builders
{
  public class AddressTestDataBuilder
  {
    private string _street;
    private string _city;
    private int _postalCode;
    private readonly RandomGenerator _random = new RandomGenerator();

    public AddressTestDataBuilder WithStreet(string newStreet)
    {
      _street = newStreet;
      return this;
    }

    public AddressTestDataBuilder WithCity(string newCity)
    {
      _city = newCity;
      return this;
    }

    public AddressTestDataBuilder WithPostalCode(int postalCode)
    {
      _postalCode = postalCode;
      return this;
    }

    public Address BuildRandom()
    {
      _street = _random.RandomString(15, true);
      _city = _random.RandomString(10, true);
      _postalCode = _random.RandomNumber(1,500);
      return new Address(_street, _city, _postalCode);
    }

    public Address Build()
    {
      return new Address(_street, _city, _postalCode);
    }
  }
}

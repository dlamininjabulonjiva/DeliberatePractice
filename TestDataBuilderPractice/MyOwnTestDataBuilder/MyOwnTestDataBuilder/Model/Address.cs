using System;
using System.Collections.Generic;
using System.Text;

namespace MyOwnTestDataBuilder.Model
{
  public class Address
  {
    public string Street { get; set; }
    public string City { get; set; }
    public int PostalCode { get; set; }

    public Address(string street, string city, int postalCode)
    {
      Street = street;
      City = city;
      PostalCode = postalCode;
    }
  }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace MyOwnTestDataBuilder.Test
{
  public class RandomGenerator
  {
    private readonly Random _random = new Random();

    public int RandomNumber(int min, int max)
    {
      return _random.Next(min, max);
    }

    public string RandomString(int size, bool lowerCase = false)
    {
      var builder = new StringBuilder(size);

      var offset = lowerCase ? 'a' : 'A';
      const int lettersOffset = 26;

      for (var i = 0; i < size; i++)
      {
        var @char = (char)_random.Next(offset, offset + lettersOffset);
        builder.Append(@char);
      }

      return lowerCase ? builder.ToString().ToLower() : builder.ToString();
    }
  }
}

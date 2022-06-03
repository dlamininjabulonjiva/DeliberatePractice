using System.Collections.Generic;

namespace RomanNumerals.Tests
{
    public class Formatter
    {
        public string Format(int input)
        {
            var romanString = "";
            var dictionary = new Dictionary<int, string>
            {
              { 1000, "M" },
              { 900, "CM" },
              { 500, "D" },
              { 400, "CD" },
              { 100, "C" },
              { 90, "XC" },
              { 50, "L" },
              { 40, "XL" },
              { 10, "X" },
              { 9, "IX" },
              { 5, "V" },
              { 4, "IV" },
              { 1, "I" },
            };

            foreach (var item in dictionary)
            {
              while (input >= item.Key)
              {
                romanString += item.Value;
                input -= item.Key;
              }
            }
      
            return romanString ;
        }
    }
}
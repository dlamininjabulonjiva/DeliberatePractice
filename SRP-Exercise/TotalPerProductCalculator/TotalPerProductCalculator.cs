using System;
using System.Collections.Generic;
using System.IO;

namespace TotalPerProductCalculator
{
    public class TotalPerProductCalculator
    {
        public void Calculate(string fileName)
        {
            var fileContents = File.ReadAllLines(fileName);
            var totalPerProduct = new Dictionary<string, int>();
            foreach (var line in fileContents)
            {
                var values = line.Split('|');
                var orderNumber = values[0]; 
                var productName = values[1];
                var qty = int.Parse(values[2]);
                int existingQty;
                totalPerProduct[productName] =
                    totalPerProduct.TryGetValue(productName, out existingQty)
                        ? existingQty + qty
                        : qty;
            }
            foreach (var product in totalPerProduct)
            {
                Console.Out.WriteLine($"{product.Key}: {product.Value}");
            }
        }
    }
}
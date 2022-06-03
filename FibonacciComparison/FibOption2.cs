using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FibonacciComparison
{
    class FibOption2
    {
        public static int[] FibonacciToNElements(int n)
        {
            var result = new int[n];
            result[0] = 1;
            result[1] = 1;

            for (var i = 2; i < n; i++)
            {
                result[i] = result[i - 2] + result[i - 1];
            }
            return result;
        }
    }
}

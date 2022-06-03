using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FibonacciComparison
{
    class FibOption3
    {
        public static IEnumerable<int> Fibonacci()
        {
            var i = 1;
            var j = 1;
            yield return i;
            while (true)
            {
                yield return j;
                var k = i + j;
                i = j;
                j = k;
            }
        }

    }
}

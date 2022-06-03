using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FibonacciComparison
{
    class FibOption5
    {
        public static IEnumerable<int> Fibonacci()
        {
            var fib = new FibOption5();
            while (true) yield return fib.Next();
        }

        private int i = 1;
        private int j = 1;
        int termCount = 0;
        public int Next()
        {
            if (termCount++ < 2) return 1;
            var k = i + j;
            i = j;
            return j = k;
        }

    }
}

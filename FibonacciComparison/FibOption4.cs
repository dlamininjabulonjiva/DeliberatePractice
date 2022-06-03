using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FibonacciComparison
{
    class FibOption4
    {
        public static IEnumerable<int> Fibonacci()
        {
            var fibFunc = CreateFibFunc();
            while (true) yield return fibFunc();
            Func<int> CreateFibFunc()
            {
                var i = 1;
                var j = 1;
                var calls = 0;
                return () =>
                {
                    if (calls <= 1) { calls += 1; return 1; }
                    var result = i + j;
                    i = j;
                    j = result;
                    return result;
                };
            }
        }

    }
}

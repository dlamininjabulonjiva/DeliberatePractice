using System.Collections.Generic;

namespace FibonacciComparison
{
    class FibOption1
    {
        public static IEnumerable<int> Fibonacci()
        {
            yield return 1;
            yield return 1;
            foreach (var i in Fib(1, 1))
            {
                yield return i;
            }
        }
        private static IEnumerable<int> Fib(int num1, int num2)
        {
            var nextFib = num1 + num2;
            yield return nextFib;
            foreach (var i in Fib(num2, nextFib))
            {
                yield return i;
            };
        }
    }
}
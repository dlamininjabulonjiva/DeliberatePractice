using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FibonacciComparison
{
    class Program
    {
        // Have a look at the five different implementations of the Fibonacci sequence.
        // The Fibonacci sequence is a sequence that starts with 1 and 1, and then every value in the sequence after that
        // is the sum of the two previous values.

        // Which of the provided implementations is simplest?  Why do you say this?
        // Which of the provided implementations is most communicative? Why do you say this?
        // Which of the provided implementations is most flexible? Why do you say this?
        // Which of the provided implementations balances these values the best? Why do you say this?
        // Can you improve upon them, or provide a new implementation that embodies the three values better?

        static void Main(string[] args)
        {
            Output(FibOption1.Fibonacci().Take(20));
            Output(FibOption2.FibonacciToNElements(20));
            Output(FibOption3.Fibonacci().Take(20));
            Output(FibOption4.Fibonacci().Take(20));
            Output(FibOption5.Fibonacci().Take(20));
            Console.In.ReadLine();
        }

        public static void Output(IEnumerable<int> elements)
        {
            Console.Out.WriteLine(string.Join(", ", elements));
        }


    }
}

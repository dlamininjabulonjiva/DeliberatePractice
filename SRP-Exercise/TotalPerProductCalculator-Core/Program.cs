﻿using System;

namespace TotalPerProductCalculator_Core
{
    // Read and analyse the TotalPerProductCalculator class.
    // What are its responsibilities?
    // What are the reasons it might change?  
    // Remove each of these reasons to change from this class one at a time so that it ends up
    // with just a single responsibility.

    class Program
    {
        static void Main(string[] args)
        {
            var calc = new TotalPerProductCalculator();
            calc.Calculate("ProductsSold.txt");
        }
    }
}

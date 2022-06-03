using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace RomanNumerals.Tests
{
    [TestClass]
    public class TestFormatter
    {
        [DataTestMethod]
        [DataRow(1, "I")]
        [DataRow(2, "II")]
        [DataRow(3, "III")]
        [DataRow(4, "IV")]
        [DataRow(5, "V")]
        [DataRow(6, "VI")]
        [DataRow(7, "VII")]
        [DataRow(8, "VIII")]
        [DataRow(9, "IX")]
        [DataRow(10, "X")]
        [DataRow(11, "XI")]
        [DataRow(12, "XII")]
        [DataRow(13, "XIII")]
        [DataRow(14, "XIV")]
        [DataRow(15, "XV")]
        [DataRow(20, "XX")]
        [DataRow(38, "XXXVIII")]
        [DataRow(40, "XL")]
        [DataRow(42, "XLII")]
        [DataRow(50, "L")]
        [DataRow(55, "LV")]
        [DataRow(70, "LXX")]
        [DataRow(89, "LXXXIX")]
        [DataRow(90, "XC")]
        [DataRow(98, "XCVIII")]
        [DataRow(100, "C")]
        [DataRow(110, "CX")]
        [DataRow(149, "CXLIX")]
        [DataRow(362, "CCCLXII")]
        [DataRow(400, "CD")]
        [DataRow(420, "CDXX")]
        [DataRow(500, "D")]
        [DataRow(753, "DCCLIII")]
        [DataRow(900, "CM")]
        [DataRow(935, "CMXXXV")]
        [DataRow(1000, "M")]
        [DataRow(1995, "MCMXCV")]
        public void GivenInt_ShouldReturnRomanNumeralFormat(int input, string expected)
        {
            // Arrange
            var sut = new Formatter();

            // Act
            var result = sut.Format(input);

            // Assert
            Assert.AreEqual(expected, result);
        }

    }
}
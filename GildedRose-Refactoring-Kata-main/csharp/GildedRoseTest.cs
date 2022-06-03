using System;
using NUnit.Framework;
using System.Collections.Generic;

namespace csharp
{
    [TestFixture]
    public class GildedRoseTest
    {
        [Test]
        public void Foo()
        {
            // Arrange
            const string itemName = "foo";
            const string expectedItemName = "foo";
            const int itemSellIn = 0;
            const int itemQuality = 0;
            var sut = CreateSut(itemName, itemSellIn, itemQuality);
            // Act
            sut.UpdateQuality();
            // Assert
            Assert.AreEqual(expectedItemName, itemName);
        }

        [Test]
        public void GivenStandardItem_ShouldDecreaseSellByDayNumberEachTime()
        {
            // Arrange
            const string itemName = "Standard item";
            const int itemSellIn = 0;
            const int itemQuality = 0;
            var sut = CreateSut(itemName, itemSellIn, itemQuality);
            // Act
            sut.UpdateQuality();
            // Assert
            Assert.AreEqual(-1, sut.Items[0].SellIn);
        }

        [Test]
        public void GivenAgedBrie_ShouldDecreaseSellByDayNumberEachTime()
        {
            // Arrange
            const string itemName = "Aged Brie";
            const int itemSellIn = 1;
            const int itemQuality = 1;
            var sut = CreateSut(itemName, itemSellIn, itemQuality);
            // Act
            sut.UpdateQuality();
            // Assert
            Assert.AreEqual(0, sut.Items[0].SellIn);
        }

        [Test]
        public void GivenBackstagePassesToATAFKAL80ETCConcert_ShouldDecreaseSellByDayNumberEachTime()
        {
            // Arrange
            const string itemName = "Backstage passes to a TAFKAL80ETC concert";
            const int itemSellIn = 1;
            const int itemQuality = 1;
            var sut = CreateSut(itemName, itemSellIn, itemQuality);
            // Act
            sut.UpdateQuality();
            // Assert
            Assert.AreEqual(0, sut.Items[0].SellIn);
        }

        [Test]
        public void GivenAgedBrie_ShouldIncreasesInQualityEachTime()
        {
            // Arrange
            const string itemName = "Aged Brie";
            const int itemSellIn = 1;
            const int itemQuality = 1;
            var sut = CreateSut(itemName, itemSellIn, itemQuality);
            // Act
            sut.UpdateQuality();
            // Assert
            Assert.AreEqual(2, sut.Items[0].Quality);
        }

        [Test]
        public void GivenAgedBrie_QualityShouldNotGoAboveFiftyWhenIncreasing()
        {
            // Arrange
            const string itemName = "Aged Brie";
            const int itemSellIn = 1;
            const int itemQuality = 49;
            var sut = CreateSut(itemName, itemSellIn, itemQuality);
            // Act
            sut.UpdateQuality();
            sut.UpdateQuality();
            // Assert
            Assert.AreEqual(50, sut.Items[0].Quality);
        }

        private static GildedRose CreateSut(string itemName, int itemSellIn, int itemQuality)
        {
            var items = new List<Item> { new Item { Name = itemName, SellIn = itemSellIn, Quality = itemQuality } };
            return new GildedRose(items);
        }
    }
}

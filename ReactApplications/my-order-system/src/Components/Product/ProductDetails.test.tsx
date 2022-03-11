import { fireEvent, render } from "@testing-library/react";
import { ProductItem } from '../Product/ProductItem';

describe("ProductDetails.test.tsx", () => {
    describe("Tags", () => {
        it("should set the title of the product", () => {
            // Arrange
            const productItems: ProductItem[] = [
                { 
                    id: 1,
                    title: "Jacket",
                    price: 15.99,
                    description: "Men's Summer Jacket",
                    category: "Men's Clothing",
                    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    rating: {
                        rate: 4.7,
                        count: 23,
                    },
                    numberOfProducts: 1,
                },
                { 
                    id: 2,
                    title: "Vest",
                    price: 11.99,
                    description: "Women's vest",
                    category: "Women's Clothing",
                    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                    rating: {
                        rate: 4.9,
                        count: 33,
                    },
                    numberOfProducts: 2,
                },
            ];
            // const products: {
            //         data = productItems,
            //         doneLoading: false,
            //         error: null,
            //   };

              
            // Act
            // Assert
        });
    });

    function GetProducts(): ProductItem {
        return {
            id: 1,
            title: "Jacket",
            price: 15.99,
            description: "Men's Summer Jacket",
            category: "Men's Clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rating: {
                rate: 4.7,
                count: 23,
            },
            numberOfProducts: 1,
        };
    }
});
/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";
import CartItem from '../CartItem/CartItem';
import { ProductItem } from '../Product/ProductItem';
import FormatCurrency  from '../../Helpers/FormatCurrency';

describe("CartItem.tsx", () => {
    describe("When rendered with props", () => {
        describe("Tags", () => {
            it("should set the title of the product", () => {
                // Arrange
                const product = GetProduct();
                // Act
                const {getByTestId} = render(
                    <CartItem 
                        product = {product} 
                        addProductToCart = { () => {} } 
                        removeProductFromCart = { () => {} } 
                    />
                ); 
                // Assert
                expect(getByTestId('title').textContent).toBe(product.title);
            });

            it("should set the price of the product", () => {
                // Arrange
                const product = GetProduct();
                const expectedValue = "Price: " + FormatCurrency(product.price);
                // Act
                const {getByTestId} = render(
                    <CartItem 
                        product = {product} 
                        addProductToCart = { () => {} } 
                        removeProductFromCart = { () => {} } 
                    />
                ); 
                // Assert
                expect(getByTestId('price').textContent).toBe(expectedValue);
            });

            it("should set the total price for all the products", () => {
                // Arrange
                const product = GetProduct();
                const expectedValue = "Total: " + FormatCurrency(product.numberOfProducts * product.price);
                // Act
                const {getByTestId} = render(
                    <CartItem 
                        product = {product} 
                        addProductToCart = { () => {} } 
                        removeProductFromCart = { () => {} } 
                    />
                ); 
                // Assert
                expect(getByTestId('total').textContent).toBe(expectedValue);
            });
        });

        describe("Buttons", () => {
            describe("AddProductToCart button", () => {
                it("should render the add product to cart button", () => {
                    // Arrange
                    const product = GetProduct();
                    // Act
                    const {getByTestId} = render(
                        <CartItem 
                            product = {product} 
                            addProductToCart = { () => {} } 
                            removeProductFromCart = { () => {} } 
                        />
                    ); 
                    // Assert
                    expect(getByTestId('addProduct')).toBeInTheDocument();
                });

                it("should call the addProductToCart callback", () => {
                    // Arrange
                    const product = GetProduct();
                    const addProductToCart = jest.fn();
                    // Act
                    const {getByTestId} = render(
                        <CartItem 
                            product = {product} 
                            addProductToCart = { addProductToCart } 
                            removeProductFromCart = { () => {} } 
                        />
                    ); 
                    // Assert
                    fireEvent.click(getByTestId('addProduct'));
                    expect(addProductToCart).toHaveBeenCalledWith(product);
                });
            });
            
            describe("RemoveProductFromCart button", () => {
                it("should render the remove product to cart button", () => {
                    // Arrange
                    const product = GetProduct();
                    // Act
                    const {getByTestId} = render(
                        <CartItem 
                            product = {product} 
                            addProductToCart = { () => {} } 
                            removeProductFromCart = { () => {} } 
                        />
                    ); 
                    // Assert
                    expect(getByTestId('removeProduct')).toBeInTheDocument();
                });

                it("should call the addProductToCart callback", () => {
                    // Arrange
                    const product = GetProduct();
                    const removeProductFromCart = jest.fn();
                    // Act
                    const {getByTestId} = render(
                        <CartItem 
                            product = {product} 
                            addProductToCart = { () => {} } 
                            removeProductFromCart = { removeProductFromCart } 
                        />
                    ); 
                    // Assert
                    fireEvent.click(getByTestId('removeProduct'));
                    expect(removeProductFromCart).toHaveBeenCalledWith(product.id);
                });
            });
        });
    });

    function GetProduct(): ProductItem {
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
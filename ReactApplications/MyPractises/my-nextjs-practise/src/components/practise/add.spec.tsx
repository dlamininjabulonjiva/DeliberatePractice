import add from '@src/components/practise/add';
import { ProductModelTestDataBuilder } from '@src/test-utils/testDataBuilders/productModelTestDataBuilder';

describe('add test', () => {
    it('should add two numbers', () => {
        // Arrange
        const expectedProducts = ProductModelTestDataBuilder.create()
            .withRandomProps()
            .buildList(3);
        const product1 = ProductModelTestDataBuilder.create()
            .withRandomProps()
            .withPrice(250)
            .build();
        const product2 = ProductModelTestDataBuilder.create()
            .withRandomProps()
            .withPrice(280)
            .build();
        // Act
        const actual = add(product1.price, product2.price);
        // Assert
        expect(actual).toBe(530);
    })
});
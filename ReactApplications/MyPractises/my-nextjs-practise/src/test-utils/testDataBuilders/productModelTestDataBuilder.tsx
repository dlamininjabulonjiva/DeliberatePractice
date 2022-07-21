import { ProductModel } from "@src/components/products/Product-model";
import { TestDataBuilder } from "../Test-data-builder";
import faker from "faker"


export class ProductModelTestDataBuilder extends TestDataBuilder<ProductModelTestDataBuilder,  ProductModel> {
  constructor() {
    super(() => {
      return {} as ProductModel;
    });
  }

  static create() {
    return new ProductModelTestDataBuilder();
  }

  withId(value: number) {
    return this.withProp(prop => prop.id = value);
  }

  withTittle(value: string) {
    return this.withProp(prop => prop.title = value);
  }

  withPrice(value: number) {
    return this.withProp(prop => prop.price = value);
  }

  withDescription(value: string) {
    return this.withProp(prop => prop.description = value);
  }

  withImage(value: string) {
    return this.withProp(prop => prop.image = value);
  }

  withRandomProps() {
    return this.withProp(prop => prop.id = faker.datatype.number())
    .withProp(prop => prop.title = faker.lorem.text())
    .withProp(prop => prop.price = faker.datatype.number())
    .withProp(prop => prop.description = faker.lorem.sentence())
    .withProp(prop => prop.image = faker.image.imageUrl());
  }
}

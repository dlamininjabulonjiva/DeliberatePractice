import { Calculator } from "../Calculator"

describe("Calculator", () => {
  it("should initialize the calculator with a seed value", () => {
    // Arrange
    const sut = createSut()
    // Act
    const result = sut.Seed(10).Result()
    // Assert
    expect(result).toBe(10)
  })

  it("should add a value to the current value using Plus", () => {
    // Arrange
    const sut = createSut()
    // Act
    const result = sut.Seed(10).Plus(5).Result()
    // Assert
    expect(result).toBe(15)
  })

  it("should subtract a value from the current value using Minus", () => {
    // Arrange
    const sut = createSut()
    // Act
    const result = sut.Seed(10).Minus(3).Result()
    // Assert
    expect(result).toBe(7)
  })

  it("should undo the last operation", () => {
    // Arrange
    const sut = createSut()
    // Act
    const result = sut.Seed(10).Plus(5).Minus(3).Undo().Result()
    // Assert
    expect(result).toBe(15)
  })

  it("should redo the last undone operation", () => {
    // Arrange
    const sut = createSut()
    // Act
    const result = sut.Seed(10).Plus(5).Undo().Redo().Result()
    // Assert
    expect(result).toBe(15)
  })
})

function createSut() {
    return new Calculator()
}
import React from 'react';
import { render } from '@testing-library/react';
import HelloWorld from '@src/components/practise/hello-world';

describe('Hello World', () => {
  it('should have the hello world text', () => {
    // Arrange
    const expected = "Hello World";
    // Act
    const {getByText} = render(
      <HelloWorld 
      />
    ); 
    // Assert
    expect(getByText(expected)).toBeInTheDocument();
  })

  it('should contain p tag with hello world text', () => {
    // Arrange
    // Act
    const {container} = render(
      <HelloWorld 
      />
    );
    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      <p>
        Hello World
      </p>
    `); 
  })
});
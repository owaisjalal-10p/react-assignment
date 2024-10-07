import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./productCard"; // Adjust the path as necessary

describe("ProductCard Component", () => {
  const mockAddToCart = jest.fn(); // Mock function for add to cart action

  const props = {
    imgSrc: "test-image.jpg",
    name: "Test Product",
    color: "Red",
    price: 29.99,
    onAddToCart: mockAddToCart,
  };

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock calls before each test
  });

  test("calls onAddToCart when the button is clicked", () => {
    render(<ProductCard {...props} />);

    // Simulate button click
    const button = screen.getByText("Add to Cart");
    fireEvent.click(button);

    // Assert that the mock function is called
    expect(mockAddToCart).toHaveBeenCalled();
  });
});

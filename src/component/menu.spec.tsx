import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./menu"; // Adjust path as necessary
import { fetchMenu } from "../service/menu.service"; // Adjust path as necessary

// Mock the fetchMenu function
jest.mock("../service/menu.service", () => ({
  fetchMenu: jest.fn(),
}));

const mockMenuData = [
  {
    name: "Test Menu",
    img: "test-image.jpg",
    children: [
      {
        name: "Category 1",
        categories: ["Subcategory 1", "Subcategory 2"],
      },
    ],
  },
];

// Mock useNavigate from react-router-dom
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Menu Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("navigates to checkout when Cart button is clicked", () => {
    (fetchMenu as jest.Mock).mockResolvedValue(mockMenuData);

    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    );

    const cartButton = screen.getByText("Cart");
    fireEvent.click(cartButton);

    // Should call navigate to "/checkout"
    expect(mockNavigate).toHaveBeenCalledWith("/checkout");
  });
});

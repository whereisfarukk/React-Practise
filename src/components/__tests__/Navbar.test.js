import React from "react";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";

describe("Navbar Component", () => {
  test("navbar testing ", () => {
    render(<Navbar />);
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    expect(screen.getByText(/Home Design/i)).toBeInTheDocument();
  });
  test("renders menu items", () => {
    render(<Navbar />);
    const menuItems = [
      "Home Design",
      "Display Homes",
      "Buy",
      "Portfolio",
      "Investor Deals",
    ];

    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
  test("renders 'Make your own makaaan' button", () => {
    render(<Navbar />);
    const button = screen.getByText(/make your own makaaan/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("make-your-maakan");
  });
  test("toggles menu visibility on icon click", () => {
    render(<Navbar />);
    const toggleIcon = screen.getByLabelText(/menu/i);
    // const toggleIcon = screen.querySelector(".icon");

    const navLinks = screen.getByRole("list");
    expect(navLinks).toHaveClass("navlink");
    expect(navLinks).not.toHaveClass("active");
    fireEvent.click(toggleIcon);
    expect(navLinks).toHaveClass("active");
  });
});

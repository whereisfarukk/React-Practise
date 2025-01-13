import React from "react";
import "@testing-library/jest-dom";
import TenantsAndLandloard2 from "../TenantsAndLandloard2/TenantsAndLandloard2";
import { screen, render, fireEvent } from "@testing-library/react";
describe("TenantsAndLandloard Component", () => {
  test("Testing all text", () => {
    render(<TenantsAndLandloard2 />);
    const textArray = [
      "At The Makaan Builders, we've simplified the journey of building your first home with our innovative Price Your Home Tool, making the process quicker, more intelligent, and more convenient than ever. Now, you have the ability to design and price your dream home online, at any time, without having to leave your house.",
      "Make your own makaaan",
    ];
    textArray.forEach((lines) => {
      expect(screen.getByText(lines)).toBeInTheDocument();
    });
  });
  test("renders 'Make your own makaaan' button", () => {
    render(<TenantsAndLandloard2 />);
    const button = screen.getByText(/make your own makaaan/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("make-your-maakan");
  });
  test("Image test", () => {
    render(<TenantsAndLandloard2 />);
    expect(screen.getByAltText("home-img")).toBeInTheDocument();
  });
});

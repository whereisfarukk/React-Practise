import React from "react";
import "@testing-library/jest-dom";
import Footer from "../Footer/Footer";
import { screen, render, fireEvent } from "@testing-library/react";
jest.mock("../Footer/components/Socials.jsx", () => () => (
  <div data-testid="socials">Socials Component</div>
));

describe("Footer Component", () => {
  test("text content ", () => {
    render(<Footer />);
    const textArray = [
      "Makaan Builders",
      "Homes",
      "Single Storey Home",
      "Double Storey House",
      "Dual Occupancy",
      "Company",
      "About Us",
      "Contact",
      "Portfolio",
      "Company",
      "Address: 34 Saturn Street Leppington NSW 2179",
      "Phone: 1800 508 050",
      "Email: Office@themakaanbuilders.com.au",
      "© 2024 The Makaan Builders. Powered By Ichelon",
    ];
    textArray.forEach((lines) => {
      if (lines === "Company") {
        expect(screen.getAllByText(lines).length).toBeGreaterThan(0);
      } else {
        expect(screen.getByText(lines)).toBeInTheDocument();
      }
    });
  });
  test("Row2 test ", () => {
    render(<Footer />);
    expect(screen.getByTestId("socials")).toBeInTheDocument();
  });
});

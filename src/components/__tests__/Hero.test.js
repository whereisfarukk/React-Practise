import React from "react";
import "@testing-library/jest-dom";
import Hero from "../Hero/Hero";
import { screen, render, fireEvent } from "@testing-library/react";
describe("Hero Component", () => {
  test("renders Hero section with correct text", () => {
    render(<Hero />);
    const text = [
      "Build Your Dream Home",
      "From custom homes to new projects, Makaan Builders offers innovative solutions and exceptional craftsmanship. Experience the difference with us.",
      "Build",
      "House & land",
      "Location",
      "Enter Location",
      "When",
      "Safe investments",
      "Manuel Villa",
      "Customer",
      "Moved with",
      "I loved how smooth the move was, and finally got the house we wanted.",
      "$1,500",
      "Saved up to",
      "6 Month",
      "Process time",
    ];
    text.forEach((lines) => {
      expect(screen.getByText(lines)).toBeInTheDocument();
    });
  });
  test("renders profile image and other images", () => {
    render(<Hero />);

    const profileImg = screen.getByAltText(/Profile Image/i);
    expect(profileImg).toBeInTheDocument();

    const homeImg = screen.getByAltText(/Home Image/i);
    expect(homeImg).toBeInTheDocument();
  });
  test("renders 'Make your own makaaan' button", () => {
    render(<Hero />);
    const button = screen.getByText(/Make your makaan/i);
    expect(button).toBeInTheDocument();
  });
  test("renders calendar icon", () => {
    render(<Hero />);

    const calendarIcon = screen.getByLabelText("calendar");
    expect(calendarIcon).toBeInTheDocument();
  });
});

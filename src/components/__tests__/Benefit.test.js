import React from "react";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import Benefit from "../Benefit/Benefit";
import BenefitCards from "../Benefit/components/BenefitCards";
jest.mock("../Benefit/components/BenefitCards", () => () => (
  <div data-testid="benefit-card">
    {" "}
    <h4>A Legacy of Excellence</h4>
    <p>
      With over 100 completed projects and a reputation for exceptional
      craftsmanship, The Makaan Builders has become a trusted name in the
      industry. Our commitment to quality and customer satisfaction is evident
      in every home we build.
    </p>
  </div>
));

describe("Benefit Component", () => {
  test("Text element testing ", () => {
    render(<Benefit />);
    const Text = [
      "The new way to Build your new home",
      "Find your dream place to live in with more than 10k+ properties listed.",
    ];
    Text.forEach((lines) => {
      expect(screen.getByText(lines)).toBeInTheDocument();
    });
  });
  test("renders 'Make your own makaaan' button", () => {
    render(<Benefit />);
    const button = screen.getByText(/make your own makaaan/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("make-your-maakan");
  });
  test("To have BenefitCards", () => {
    render(<Benefit />);
    const benefitCards = screen.getAllByTestId("benefit-card");
    expect(benefitCards).toHaveLength(4);
  });
});

describe("BenefitCads componenet test", () => {
  test("Text element testing ", () => {
    render(<BenefitCards />);
    const Text = [
      "A Legacy of Excellence",
      "With over 100 completed projects and a reputation for exceptional craftsmanship, The Makaan Builders has become a trusted name in the industry. Our commitment to quality and customer satisfaction is evident in every home we build.",
    ];
    Text.forEach((lines) => {
      expect(screen.getByText(lines)).toBeInTheDocument();
    });
  });
});

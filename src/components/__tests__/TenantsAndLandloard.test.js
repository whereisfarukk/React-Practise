import React from "react";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import TenantsAndLandloard from "../TenantsAndLandloard/TenantsAndLandloard";
import FirstRow from "../TenantsAndLandloard/components/FirstRow";
import SecondRow from "../TenantsAndLandloard/components/SecondRow";
jest.mock("../icons/PreviousPage", () => () => (
  <svg data-testid="previous-page" />
));
jest.mock("../icons/NextPage", () => () => (
  <svg data-testid="next-page-navigation" />
));
jest.mock("../icons/VideoIcon", () => () => <svg data-testid="video-icon" />);
jest.mock("../icons/Icon", () => () => <svg data-testid="icon" />);

// /home/faruk/home-builder/src/components/icons/PreviousPage.jsx
describe("TenantsAndLandloard Component", () => {
  test("text content ", () => {
    render(<TenantsAndLandloard />);
    const text = [
      "About the Makaan Builders",
      "Virtual home tour",
      "We provide you with virtual tour",
      "Find the best deal",
      "Browse thousands of properties",
      "Build Time Commitment",
      "We commit to completing your single-storey home within a timeframe of 6 months, and double-storey homes within 10 months. Recognizing the potential financial strain caused by project delays, we have instituted a rigorous Stress Tested Building Process. In the event of any construction delays, we pledge to compensate you with $5000 per month to alleviate mortgage stress.",
      "See more",
    ];
    text.forEach((lines) => {
      expect(screen.getByText(lines)).toBeInTheDocument();
    });
  });
  test("icons testing in firstrow", () => {
    render(<FirstRow />);
    expect(screen.getByTestId("previous-page")).toBeInTheDocument();
    expect(screen.getByTestId("next-page-navigation")).toBeInTheDocument();
  });
  test("icons testing in secondrow", () => {
    render(<SecondRow />);
    expect(screen.getByTestId("video-icon")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});

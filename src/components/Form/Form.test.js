import React from "react";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import Form from "./Form";
function generateRandomData(count) {
  const results = [];

  for (let i = 0; i < count; i++) {
    // generating 5 digit random combinations
    const randomNumber = Math.floor(10000 + Math.random() * 90000);

    // generating random emails
    const randomEmail = `user${randomNumber}@gmail.com`;

    // store the number and email as a pair
    results.push({ number: randomNumber, email: randomEmail });
  }

  return results;
}
describe("Form Component", () => {
  test("renders the form fields and submit button", () => {
    render(<Form />);
    expect(screen.getByLabelText(/roll:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email:/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });
  test("allows user input in the text fields", () => {
    render(<Form />);

    const rollInput = screen.getByLabelText(/roll:/i);
    const emailInput = screen.getByLabelText(/email:/i);

    // simulate user typing in the fields
    fireEvent.change(rollInput, { target: { value: "1234" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    // assert that the input values have been updated
    expect(rollInput.value).toBe("1234");
    expect(emailInput.value).toBe("test@example.com");

    const data = generateRandomData(5000);
    console.log(data.length);
    data.forEach((item) => {
      // console.log(`Number: ${item.number}, Email: ${item.email}`);
      fireEvent.change(rollInput, {
        target: { value: item.number.toString() },
      });
      fireEvent.change(emailInput, { target: { value: item.email } });

      expect(rollInput.value).toBe(item.number.toString());
      expect(emailInput.value).toBe(item.email);
    });
  });
  test("displays error when fields are empty on submit", () => {
    render(<Form />);

    // get the submit button
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // simulate form submission without filling fields
    fireEvent.click(submitButton);

    // checking if the browser's validation prevents submission
    expect(screen.getByLabelText(/roll:/i)).toBeInvalid();
    expect(screen.getByLabelText(/email:/i)).toBeInvalid();
  });

  test("submits form successfully with valid input", () => {
    render(<Form />);

    //get input elements
    const rollInput = screen.getByLabelText(/roll:/i);
    const emailInput = screen.getByLabelText(/email:/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // Simulate user typing in valid values
    fireEvent.change(rollInput, { target: { value: "5678" } });
    fireEvent.change(emailInput, { target: { value: "user@example.com" } });

    // mock form submission
    const form = screen.getByRole("form");
    form.onsubmit = jest.fn();

    fireEvent.click(submitButton);

    // Assert that the form's submit handler was called
    expect(form.onsubmit).toHaveBeenCalled();
  });
});

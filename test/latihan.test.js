import { render, screen, fireEvent } from "@testing-library/react";
import { Counter, Greeting, AlertButton } from "./latihan";
import "@testing-library/jest-dom";
import React from "react";

describe("Latihan Counter Component", () => {
  test("Counter Default Value must be 0", () => {
    render(<Counter />);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("0");
  });

  test("Increment works when button clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-button");
    fireEvent.click(incrementButton);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("1");
  });

  test("Decrement works when button clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId("decrement-button");
    fireEvent.click(decrementButton);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("-1");
  });

  test("Reset the count using reset button", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-button");
    const resetButton = screen.getByTestId("reset-button");
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("0");
  });
});

describe("Latihan Greeting Component", () => {
  test("Greeting component renders user name", () => {
    render(<Greeting name="Shevabey Rahman" />);
    const greeting = screen.getByTestId("greeting");
    expect(greeting).toHaveTextContent("Hello, Shevabey Rahman");
  });

  test("Greeting component renders lecturer name", () => {
    render(<Greeting name="Mr. Arif Rahman" />);
    const greeting = screen.getByTestId("greeting");
    expect(greeting).toHaveTextContent("Hello, Mr. Arif Rahman");
  });
});

describe("Latihan AlertButton Component", () => {
  test("Triggers alert with correct message when clicked", () => {
    window.alert = jest.fn(); // Mock alert
    render(<AlertButton message="Hello World!" />);
    const alertButton = screen.getByTestId("alert-button");
    fireEvent.click(alertButton);
    expect(window.alert).toHaveBeenCalledWith("Hello World!");
  });
});

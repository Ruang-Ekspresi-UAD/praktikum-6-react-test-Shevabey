import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./counter";
import Display from "./display";

describe("Counter Component", () => {
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
});

describe("Display Component", () => {
  test("Display has correct value", () => {
    render(<Display value={42} />);
    const displayValue = screen.getByTestId("display-value");
    expect(displayValue).toHaveTextContent("Value: 42");
  });
});

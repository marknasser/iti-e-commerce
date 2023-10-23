import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("render counter value", () => {
  //render component
  //select element
  //simulate events
  //expect result

  render(<Counter />);
  const counterTest = screen.getByText(/0/i);
  expect(counterTest).toBeInTheDocument();
});

test("render increment & decrement buttons", () => {
  render(<Counter />);
  const incrementBTN = screen.getByRole("button", { name: "Increase" });
  const decreaBTN = screen.getByRole("button", { name: "Decrease" });

  expect(incrementBTN).toBeInTheDocument();
  expect(decreaBTN).toBeInTheDocument();
});

test("when click Increment & Decrement", () => {
  render(<Counter />);
  const counterTest = screen.getByText(/0/i);
  expect(counterTest).toBeInTheDocument();

  // simulate click
  const incrementBTN = screen.getByRole("button", { name: "Increase" });
  const decreaBTN = screen.getByRole("button", { name: "Decrease" });

  fireEvent.click(incrementBTN);
  expect(counterTest).toHaveTextContent("1");

  fireEvent.click(decreaBTN);
  expect(counterTest).toHaveTextContent("0");
});

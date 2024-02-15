import { render, fireEvent, screen } from "@testing-library/react";
import FunctionalTesting from "../FunctionTesting";

test("Sum of two values", () => {
  render(<FunctionalTesting />);

  const add = screen.getByTestId("sum");
  const addBtn = screen.getByTestId("addition");
  fireEvent.click(addBtn);

  expect(add).toHaveTextContent("10");
});
test("Multiplication", () => {
  render(<FunctionalTesting />);

  const multiple = screen.getByTestId("multiple");
  const multipleBtn = screen.getByTestId("Muliplication");
  fireEvent.click(multipleBtn);

  expect(multiple).toHaveTextContent("200");
});

test("formatted number", () => {
  render(<FunctionalTesting />);

  const show_format = screen.getByTestId("show_format");
  const formatBtn = screen.getByTestId("format_number");
  fireEvent.click(formatBtn);
  expect(show_format).toHaveTextContent("1,000.78");
});

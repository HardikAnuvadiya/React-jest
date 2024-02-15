import { render, screen, fireEvent } from "@testing-library/react";

import Login from "../Login";

test("Element Rendered Properly", () => {
  render(<Login />);
  const emailLabel = screen.getByText(/Email/i);
  const passwordLabel = screen.getByText(/Password/i);
  const submitBtn = screen.getByText(/Submit/i);
  expect(emailLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
  // const input = screen.getByRole("textbox", { name: "email" });
  // expect(input).toHaveAttribute("type", "email");
});

test("Button OnClick - Without Filling Form", () => {
  render(<Login />);
  const button = screen.getByRole("button", {
    name: /submit/i,
  });
  fireEvent.click(button);
  expect(screen.getByText("Email is required!")).toBeInTheDocument();
  expect(screen.getByText("Password is required")).toBeInTheDocument();
});

test("Check Email InValid Validation", () => {
  render(<Login />);
  const inputEl = screen.getByTestId("email-input");
  fireEvent.change(inputEl, {
    target: { value: "john" },
  });
  const button = screen.getByRole("button", {
    name: /submit/i,
  });
  fireEvent.click(button);
  expect(screen.getByText(/Please enter a valid email/i)).toBeInTheDocument();
});

test("Fill All Information - On Submit Expect Clear Form", () => {
  // const handleSubmit = jest.fn();
  render(<Login />);
  const inputEl = screen.getByTestId("email-input");
  const inputPassword = screen.getByTestId("password-input");

  fireEvent.change(inputEl, {
    target: { value: "john@gmail.com" },
  });
  fireEvent.change(inputPassword, {
    target: { value: "@ppleUk9" },
  });

  const button = screen.getByRole("button");
  fireEvent.submit(button);
  expect(inputEl.value).toBe("");
  expect(inputPassword.value).toBe("");
  // expect(handleSubmit).toHaveBeenCalledWith({
  //   email: "john@gmail.com",
  //   password: "@ppleUk9",
  // });
});

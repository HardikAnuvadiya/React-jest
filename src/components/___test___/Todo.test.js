/* eslint-disable testing-library/await-async-query */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";

describe("Todo component", () => {
  test("render the component correctly", () => {
    render(<Todo />);
    const text = screen.getByText("Add List");
    expect(text).toBeInTheDocument();
    const inputElement = screen.getByPlaceholderText("Enter List");
    expect(inputElement).toBeInTheDocument();
    const addButton = screen.getByRole("button", { name: "Add" });
    expect(addButton).toBeInTheDocument();
  });

  test("render the list is empty", () => {
    render(<Todo />);
    const data = screen.getByText("No data Found!!!!");
    expect(data).toBeInTheDocument();
    const addButton = screen.getByRole("button", { name: "Add" });
    expect(addButton).toBeInTheDocument();
    const inputElement = screen.getByPlaceholderText("Enter List");
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.click(addButton);
    expect(data).toBeInTheDocument();
  });

  test("Check the Add Button Functionality", () => {
    render(<Todo />);
    const inputElement = screen.getByPlaceholderText("Enter List");
    const addButton = screen.getByRole("button", { name: "Add" });
    expect(addButton).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "st" } });
    fireEvent.click(addButton);
    fireEvent.change(inputElement, { target: { value: "" } });
    // expect(inputElement).toBeEmptyDOMElement("");
    const listItem = screen.getByText("st");
    expect(listItem).toBeInTheDocument();
  });
  test("Check the Delete Button Functionality", () => {
    render(<Todo />);
    const inputElement = screen.getByPlaceholderText("Enter List");
    const addButton = screen.getByRole("button", { name: "Add" });
    fireEvent.change(inputElement, { target: { value: "item1" } });
    fireEvent.click(addButton);
    expect(inputElement.value).toBe('')
    const listItem = screen.getByText("item1");
    expect(listItem).toBeInTheDocument();
    const delButton = screen.getByRole("button", { name: "Delete" });
    fireEvent.click(delButton);
    expect(listItem).not.toBeInTheDocument();
    const data = screen.getByText("No data Found!!!!");
    expect(data).toBeInTheDocument();
  });

  test("Check the add and delete functionality for multiple element", () => {
    render(<Todo />);
    const inputElement = screen.getByPlaceholderText("Enter List");
    const addButton = screen.getByRole("button", { name: "Add" });

    // const list = screen.queryByRole("list");
    fireEvent.change(inputElement, { target: { value: "Item 1" } });
    fireEvent.click(addButton);
    const deleteBtn = screen.getByRole("button", { name: "Delete" });

    fireEvent.change(inputElement, { target: { value: "Item 2" } });
    fireEvent.click(addButton);

    fireEvent.change(inputElement, { target: { value: "Item 3" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
    // expect(list.children.length).toBe(3)

    fireEvent.click(deleteBtn);
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
    fireEvent.click(deleteBtn);
    expect(screen.queryByText("Item 2")).not.toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  test("check the edit and update functionality", () => {
    render(<Todo />);
    const inputElement = screen.getByPlaceholderText("Enter List");
    const addButton = screen.getByRole("button", { name: "Add" });
    fireEvent.change(inputElement, { target: { value: "Item 1" } });
    fireEvent.click(addButton);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    const editButton = screen.getByTestId("edit-button");
    fireEvent.click(editButton);
    fireEvent.change(inputElement, { target: { value: "Item 1" } });
    fireEvent.change(inputElement, { target: { value: "Item 1 test" } });
    const updateButton = screen.getByRole("button", { name: "update" });
    expect(updateButton).toBeInTheDocument();
    fireEvent.click(updateButton);
    expect(inputElement.value).toBe('')
    expect(screen.getByText("Item 1 test")).toBeInTheDocument();
  });

  test("check for multiple add and update one", async () => {
    render(<Todo />);
    const inputElement = screen.getByPlaceholderText("Enter List");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(inputElement, { target: { value: "Test Item 1" } });
    fireEvent.click(addButton);
    fireEvent.change(inputElement, { target: { value: "Test Item 2" } });
    fireEvent.click(addButton);
    fireEvent.change(inputElement, { target: { value: "Test Item 3" } });
    fireEvent.click(addButton);

    const editButtons = screen.getAllByRole("button", { name: "Edit" });
    fireEvent.click(editButtons[1]);
    fireEvent.change(inputElement, { target: { value: "Test Item 2" } });
    fireEvent.change(inputElement, {
      target: { value: "Updated Test Item 2" },
    });
    const updateButton = screen.getByRole("button", { name: "update" });

    fireEvent.click(updateButton);
    expect(inputElement.value).toBe('')

    expect(screen.getByText("Test Item 1")).toBeInTheDocument();
    expect(screen.getByText("Updated Test Item 2")).toBeInTheDocument();
    expect(screen.getByText("Test Item 3")).toBeInTheDocument();
  });

  test("should delete item from list when delete button is clicked", () => {
    render(<Todo />);

    const input = screen.getByPlaceholderText("Enter List");
    const addButton = screen.getByRole("button", { name: "Add" });
    fireEvent.change(input, { target: { value: "item 1" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "item 2" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "item 3" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "item 4" } });
    fireEvent.click(addButton);
    const items = screen.getByTestId("list");
    expect(items.children.length).toBe(4);
    expect(screen.getByText("item 1")).toBeInTheDocument();
    expect(screen.getByText("item 2")).toBeInTheDocument();
    expect(screen.getByText("item 3")).toBeInTheDocument();
    expect(screen.getByText("item 4")).toBeInTheDocument();

    const deleteBtn = screen.getByTestId(`delete-btn-${1}`);
    fireEvent.click(deleteBtn);
    expect(items.children.length).toBe(3);
    // expect(items).toHaveLength(2);

    expect(screen.queryByText("item 2")).not.toBeInTheDocument();
    expect(screen.getByText("item 1")).toBeInTheDocument();
    expect(screen.getByText("item 3")).toBeInTheDocument();
    expect(screen.getByText("item 4")).toBeInTheDocument();

    const deleteBtn1 = screen.getByTestId(`delete-btn-${1}`);
    fireEvent.click(deleteBtn1);
    expect(items.children.length).toBe(2);
    expect(screen.queryByText("item 2")).not.toBeInTheDocument();
    expect(screen.getByText("item 1")).toBeInTheDocument();
    expect(screen.queryByText("item 3")).not.toBeInTheDocument();
    expect(screen.getByText("item 4")).toBeInTheDocument();
  });
});

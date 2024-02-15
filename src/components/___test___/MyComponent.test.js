import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import MyComponent from "../MyComponent";

test("renders a list of items fetched from the API", async () => {
  const mockData = [
    { id: 1, username: "Item 1" },
    { id: 2, username: "Item 2" },
    { id: 3, username: "Item 3" },
  ];

  jest.spyOn(global, "fetch").mockResolvedValueOnce({
    ok: true,
    json: async () => mockData,
  });

  render(<MyComponent />);

  // Check that loading message is displayed
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  // Wait for the data to load and the loading message to disappear
  await waitFor(() =>
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
  );

  // Check that the items are rendered
  expect(screen.getByText("Item 1")).toBeInTheDocument();
  expect(screen.getByText("Item 2")).toBeInTheDocument();
  expect(screen.getByText("Item 3")).toBeInTheDocument();

  // Clean up the mock
  global.fetch.mockRestore();
});

test("renders an error message if the API request fails", async () => {
  jest
    .spyOn(global, "fetch")
    .mockRejectedValueOnce(new Error("API request failed"));

  render(<MyComponent />);

  // Check that loading message is displayed
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  // Wait for the error message to appear
  await waitFor(() => {
    expect(screen.getByText("Error fetching data.")).toBeInTheDocument();
  });

  // Check that no items are rendered
  expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Item 2")).not.toBeInTheDocument();
  expect(screen.queryByText("Item 3")).not.toBeInTheDocument();

  // Clean up the mock
  global.fetch.mockRestore();
});

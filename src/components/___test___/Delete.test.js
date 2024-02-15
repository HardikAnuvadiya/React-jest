import { render, screen, fireEvent } from "@testing-library/react";
import Delete from "../Delete";

describe("Test Cases for Delete Component", () => {
  const alert = jest.fn();

  test("rendering the Delete Button", () => {
    render(<Delete />);
    const deleteBtn = screen.getByText(/Delete/i);
    expect(deleteBtn).toBeInTheDocument();
  });

  test("onClick Delete Button , check the Modal is Displayed", () => {
    render(<Delete />);
    const deleteBtn = screen.getByText(/Delete/i);
    fireEvent.click(deleteBtn);
    const displayModalText = screen.getByText(
      /Are you Sure You Want To Delete it?/i
    );
    const confirmBtn = screen.getByText(/Confirm/i);
    const cancelBtn = screen.getByText(/cancel/i);
    expect(confirmBtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
    expect(displayModalText).toBeInTheDocument();
  });
  test("onClick Confirm Button , check the Modal is hidden", () => {
    render(<Delete />);
    const deleteBtn = screen.getByText(/Delete/i);
    fireEvent.click(deleteBtn);

    const confirmBtn = screen.getByText(/Confirm/i);
    const cancelBtn = screen.getByText(/cancel/i);

    expect(confirmBtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();

    fireEvent.click(confirmBtn);

    const displayModalText = screen.queryByText(
      /Are you Sure You Want To Delete it?/i
    );

    expect(displayModalText).not.toBeInTheDocument();
  });

//   test("onClick Confirm Button , check open alert ", async () => {
//     render(<Delete />);

//     const deleteBtn = screen.getByText(/Delete/i);
//     fireEvent.click(deleteBtn);

//     const confirmBtn = screen.getByText(/Confirm/i);
//     const cancelBtn = screen.getByText(/cancel/i);

//     expect(confirmBtn).toBeInTheDocument();
//     expect(cancelBtn).toBeInTheDocument();
//     // const alertMock = jest.spyOn(window, "alert").mockImplementation();
//     const alertMock = jest.spyOn(global, "window", "get");
//     window.alert = jest.fn();
//     fireEvent.click(confirmBtn);


    
//     // const alertMock = jest.spyOn(global,'alert').mockImplementation();
//     // expect(alertMock).toBeCalled();

//     // expect(window.alert).toHaveBeenCalledTimes(1);
//     // console.log(alertMock, "alerttttt");
//     // const alertText = screen.getByTitle(/you have succesfully deleted/i);
//     // expect(alertText).toBeInTheDocument()
//     // alert.mockClear();
//   });
});

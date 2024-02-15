// import React from "react";
// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import { Route, Routes, useParams } from "react-router-dom";
// import Property from "../Property";

// import { BrowserRouter as Router } from "react-router-dom";
// // import { createMemoryHistory } from "History";

// // jest.mock('react-router-dom', () => ({
// //   ...jest.requireActual('react-router-dom'),
// //   useParams: () => ({
// //     id: '1',
// //   }),
// // }));
// // jest.mock("react-router-dom", () => ({
// //   ...jest.requireActual("react-router-dom"),
// //   useParams: jest.fn(),
// // }));

// jest.mock("../Task", () => {
//   return {
//     Task: () => <div>Task</div>,
//   };
// });

// describe("Property", () => {
//   test("Render Property", () => {
//     render(
//       <Router>
//         <Property />
//       </Router>
//     );
//     const propertyText = screen.getByText("Property page");
//     expect(propertyText).toBeInTheDocument();
//   });

//   test("Get the data and render", () => {
//     // const history = createMemoryHistory(["/property/1", "/property/1/task"]);
//     window.history.pushState({}, "", "/property/1");
//     render(
//       <Router>
//         <Routes>
//           <Route path="/property/:id" element={<Property />}></Route>
//         </Routes>
//       </Router>
//     );
// fireEvent.click()
//     screen.getByTestId("property-details1");
//   });

//   // test("Get the correct Id", async () => {
//   //   beforeEach(() => {
//   //     jest.spyOn(useParams.mockReturnValue({ id: "1" }));
//   //   });
//   //   render(
//   //     <Router>
//   //       <Routes>
//   //         <Route path="/property/:id" element={<Property />}></Route>
//   //       </Routes>
//   //     </Router>
//   //   );

//   //   // useParams.mockReturnValue({ id: "1" });
//   //   // expect(useParams).toBe();
//   //   await waitFor(() => screen.getByText("Id -1").toBeInTheDocument());
//   //   expect(screen.getByText("Country -USA")).toBeInTheDocument();
//   //   expect(screen.getByText("Task -Task 1")).toBeInTheDocument();
//   // });

//   // test("testing useParams", () => {
//   //   render(
//   //     <Router>
//   //       <Property />
//   //     </Router>
//   //   );
//   //   jest.mock("react-router", () => ({
//   //     useParams: jest.fn().mockReturnValue({ id: "1" }),
//   //   }));
//   // });
// });

test("test",()=>{
  
})
// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import Dashboard from "../Dashboard";

// import { BrowserRouter as Router } from "react-router-dom";

// describe("Dashboard", () => {
//   test("Render Dashboard", () => {
//     render(
//       <Router>
//         <Dashboard />
//       </Router>
//     );
//     const text = screen.getByText("Dashboard");
//     expect(text).toBeInTheDocument();
//     const items = screen.getByTestId("list");
//     expect(items.children.length).toBe(3);
//   });
//   test("Correctly Navigate From Dashboard To Property Page", async () => {
//     render(
//       <Router>
//         <Dashboard />
//       </Router>
//     );
//     const singleProperty = screen.getByTestId("property-detail1");
//     fireEvent.click(singleProperty);
//     await waitFor(() => {
//       expect(window.location.pathname).toBe("/property/1");
//     });
//   });

//   test("data is stored in localStorage ", () => {
//     render(
//       <Router>
//         <Dashboard />
//       </Router>
//     );

//     const data = [
//       {
//         id: 1,
//         country: "United States",
//         task: 1,
//       },
//       {
//         id: 2,
//         country: "Russia",
//         task: 2,
//       },
//       {
//         id: 3,
//         country: "India",
//         task: 3,
//       },
//     ];
//     localStorage.setItem("properties", JSON.stringify(data));
//     localStorage.getItem("properties");

//     console.log(
//       localStorage.getItem("properties"),
//       "++++++++++++++++++++++++++++++=getItemmmm"
//     );
//     console.log(
//       localStorage.setItem("properties", JSON.stringify(data)),
//       "<<<<<<<<<<<<<<<<<<<setItemmmm"
//     );

//     console.log(window.localStorage, "####################");
//   });
// });
test("testing",()=>{
  
})
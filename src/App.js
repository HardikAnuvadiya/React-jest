import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Delete from "./components/Delete";
import FunctionTesting from "./components/FunctionTesting";
import ApiTesting from "./components/ApiTesting";
import Todo from "./components/Todo";
import Dashboard from "./components/NewComponent/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Property from "./components/NewComponent/Property";
import Task from "./components/NewComponent/Task";
// import TodoList from "./components/TodoList";
// import TodoDetail from "./components/TodoDetail";
import NotFound from "./components/NotFound";

// import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Delete/> */}
      {/* <FunctionTesting/> */}
      {/* <ApiTesting /> */}

      {/* <MyComponent /> */}
      {/* <Todo /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/property/:id" element={<Property />}></Route>
          <Route path="/property/:id/tasks" element={<Task />}></Route>
        </Routes>
      </Router>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<TodoList />} />
          <Route exact path="/todo/:id" element={<TodoDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;

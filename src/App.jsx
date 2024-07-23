import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;

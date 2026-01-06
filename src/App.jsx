import { useState } from "react";
import "./App.css";
import ToDoHeader from "./components/ToDoHeader";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState([""]);
  return (
    <div className="App">
      <ToDoHeader title="My To-Do List" />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button>Add</button>
      <ul>
        <li>Learn React</li>
        <li>Build a Project</li>
      </ul>
    </div>
  );
};

export default App;

import { useState } from "react";
import "./App.css";
import ToDoHeader from "./components/ToDoHeader";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState([""]);

  const addTask = () => {
    if(!(input.trim() == null)) {
      setTasks([...tasks, input]);
      setInput("");
    }
  }
  return (
    <div className="App">
      <ToDoHeader title="My To-Do List" />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

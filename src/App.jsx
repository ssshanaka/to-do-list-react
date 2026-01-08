import { useState } from "react";
import "./App.css";
import ToDoHeader from "./components/ToDoHeader";
import ToDoItem from "./components/ToDoItem";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState([""]);

  const addTask = () => {
    if (!(input.trim() == null)) {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

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
        {tasks.map((task) => (
          <ToDoItem key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default App;

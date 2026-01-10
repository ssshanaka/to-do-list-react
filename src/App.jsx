import { useEffect, useState } from "react";
import "./App.css";
import ToDoHeader from "./components/ToDoHeader";
import ToDoItem from "./components/ToDoItem";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks || [];
  });

  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const moveUp = (index) => {
    if (index > 0) {
      [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
      setTasks([...tasks]);
    }
  };

  const moveDown = (index) => {
    if (index < tasks.length - 1) {
      [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
      setTasks([...tasks]);
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
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
          <ToDoItem
            key={task.id}
            index={tasks.findIndex((t) => t.id === task.id)}
            task={task}
            onDelete={deleteTask}
            moveUp={moveUp}
            moveDown={moveDown}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;

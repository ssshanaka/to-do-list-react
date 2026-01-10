import "./TodoItem.css";

const ToDoItem = ({
  task,
  index,
  makeCompleted,
  onDelete,
  moveUp,
  moveDown,
}) => {
  return (
    <li className="todo-item">
      <button
        className="task-state-button"
        onClick={() => makeCompleted(task.id)}
      >
        {task.completed ? "☑️" : "⬜️"}
      </button>
      <span className={`todo-text ${task.completed ? "completed" : ""}`}>
        {task.text}
      </span>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        ❌
      </button>
      <button className="move-up-button" onClick={() => moveUp(index)}>
        👆
      </button>
      <button className="move-down-button" onClick={() => moveDown(index)}>
        👇
      </button>
    </li>
  );
};

export default ToDoItem;

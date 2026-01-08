import "./TodoItem.css";

const ToDoItem = ({ task, onDelete }) => {
  return (
    <li className="todo-item">
      <span className="todo-text">{task.text}</span>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        ❌
      </button>
    </li>
  );
};

export default ToDoItem;

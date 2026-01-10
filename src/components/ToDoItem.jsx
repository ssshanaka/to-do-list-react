import "./TodoItem.css";

const ToDoItem = ({ task, index, onDelete, moveUp, moveDown }) => {
  return (
    <li className="todo-item">
      <span className="todo-text">{task.text}</span>
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

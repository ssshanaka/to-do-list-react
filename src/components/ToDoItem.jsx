const ToDoItem = ({ task, onDelete }) => {
  return (
    <li>
      {task.text}
      <button onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
};

export default ToDoItem;

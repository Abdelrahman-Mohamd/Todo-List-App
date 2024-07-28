import "../styles/TodoItem.css";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

function TodoItem({
  task,
  id,
  completed,
  onToggle,
  onTaskUpdate,
  onTaskDelete,
}) {
  return (
    <div className="item-container">
      <div className="task-name">
        <input
          type="checkbox"
          id={`task-${id}`}
          checked={completed}
          onChange={onToggle}
          className="todo-item-checkbox"
        />
        <label className="todo-item-label" htmlFor={`task-${id}`}>
          {task}
        </label>
      </div>
      <div className="task-options">
        <EditTask
          task={task}
          id={id}
          completed={completed}
          onTaskUpdate={onTaskUpdate}
        />
        <DeleteTask onDelete={() => onTaskDelete(id)} />
      </div>
    </div>
  );
}

export default TodoItem;

import "../styles/TodoItem.css";

function TodoItem(props) {
  return (
    <div className="item-container">
      <input
        type="checkbox"
        id={`task-${props.id}`}
        checked={props.completed}
        onChange={props.onToggle}
        className="todo-item-checkbox"
      />
      <label className="todo-item-label" htmlFor={`task-${props.id}`}>
        {props.task}
      </label>
    </div>
  );
}

export default TodoItem;

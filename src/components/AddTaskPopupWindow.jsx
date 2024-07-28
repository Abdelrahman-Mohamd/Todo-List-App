import { useState } from "react";
import "../styles/AddTaskPopupWindow.css";

function AddTaskPopupWindow({ onAddTask, onClose }) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    onAddTask(newTask);
    setNewTask("");
  };

  return (
    <div className="popup-overlay">
      <div className="popup-window">
        <h3 className="add-task-popup-heading">Add New Task</h3>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="ex: buy groceries"
          className="add-task-popup-input"
        />
        <div className="popup-buttons">
          <button onClick={handleAddTask} className="add-task-popup-ok-btn">
            OK
          </button>
          <button onClick={onClose} className="add-task-popup-cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTaskPopupWindow;

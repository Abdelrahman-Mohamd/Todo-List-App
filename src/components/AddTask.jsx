import { MdFormatListBulletedAdd } from "react-icons/md";
import "../styles/AddTask.css";

function AddTask({ onClick }) {
  return (
    <div className="add-task-btn-container">
      <button className="add-task-btn" onClick={onClick}>
        <span className="add-task-text">Add Task</span>
        <MdFormatListBulletedAdd className="add-task-icon" />
      </button>
    </div>
  );
}

export default AddTask;

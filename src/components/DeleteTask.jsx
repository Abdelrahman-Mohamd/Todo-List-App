import { MdDelete } from "react-icons/md";
import "../styles/DeleteTask.css";

function DeleteTask({ onDelete }) {
  return (
    <button className="delete-btn" onClick={onDelete}>
      Delete <MdDelete className="delete-btn-icon" />
    </button>
  );
}

export default DeleteTask;

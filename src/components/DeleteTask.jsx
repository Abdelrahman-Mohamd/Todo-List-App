import { MdDelete } from "react-icons/md";
import "../styles/DeleteTask.css";
function DeleteTask() {
  return (
    <>
      <button className="delete-btn">
        Delete <MdDelete className="delete-btn-icon" />
      </button>
    </>
  );
}

export default DeleteTask;

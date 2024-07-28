import { useState } from "react";
import "../styles/EditTask.css";
import { FaEdit } from "react-icons/fa";
import PopUpWindow from "./PopUpWindow";

function EditTask({ task, id, completed, onTaskUpdate }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleEditButton() {
    setIsPopupVisible(true);
  }

  function closePopup() {
    setIsPopupVisible(false);
  }

  async function onSave(updatedTask) {
    setLoading(true);
    await fetch(`/api/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, task: updatedTask, completed: completed }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Task updated successfully:", data);
        onTaskUpdate(id, data.task); // Notify the parent component about the update
        setIsPopupVisible(false);
      })
      .catch((error) => console.error("Error updating task:", error));
    setLoading(false);
  }

  return (
    <>
      <button className="edit-btn" onClick={handleEditButton}>
        Edit <FaEdit className="edit-btn-icon" />
      </button>
      {isPopupVisible && (
        <PopUpWindow
          task={task}
          onClose={closePopup}
          onSave={onSave}
          loading={loading}
        />
      )}
    </>
  );
}

export default EditTask;

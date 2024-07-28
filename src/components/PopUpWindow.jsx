import "../styles/PopUpWindow.css";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function PopUpWindow({ task, onClose, onSave }) {
  const [editText, setEditText] = useState(task);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    await onSave(editText);
    setLoading(false);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-window">
        {loading ? (
          <AiOutlineLoading3Quarters className="loading-icon" />
        ) : (
          <>
            <h2 className="add-task-popup-heading">Edit Task</h2>
            <div className="popup-content">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="add-task-popup-input"
              />
              <div className="popup-buttons">
                <button className="add-task-popup-ok-btn" onClick={handleSave}>
                  OK
                </button>
                <button className="add-task-popup-cancel-btn" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PopUpWindow;

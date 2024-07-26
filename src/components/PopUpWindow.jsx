import "../styles/PopUpWindow.css";
import { useState } from "react";

function PopUpWindow({ task, onClose, onSave }) {
  const [editText, setEditText] = useState(task);

  const handleSave = () => {
    onSave(editText);
  };

  return (
    <div className="popup-window">
      <div className="popup-content">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button onClick={handleSave}>OK</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default PopUpWindow;

import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "../styles/TodoList.css";

function TodoList() {
  const [foundTasks, setFoundTasks] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/getAllTasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        setFoundTasks(data.length > 0);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="todo-card">
        {foundTasks ? (
          <div className="card-main-section">
            {tasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task.task}
                id={task.id}
                completed={task.completed}
                onToggle={() => toggleTaskCompletion(task.id)}
              />
            ))}
          </div>
        ) : (
          <div className="card-intro-section">
            <button
              className="starting-button"
              onClick={() => setFoundTasks(true)}
            >
              +
            </button>
            <h4>Click Here To Add Your First Task</h4>
          </div>
        )}
      </div>
    </>
  );
}

export default TodoList;

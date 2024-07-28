import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "../styles/TodoList.css";
import { MdPlaylistAddCircle } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function TodoList() {
  const [foundTasks, setFoundTasks] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getAllTasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        setFoundTasks(data.length > 0);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setIsLoading(false);
      });
  }, []);

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskUpdate = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, task: updatedTask } : task
      )
    );
  };

  const handleTaskDelete = (id) => {
    fetch(`/api/task/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setTasks(tasks.filter((task) => task.id !== id));
        } else {
          console.error("Error deleting task:", response.statusText);
        }
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <>
      <div className="todo-card">
        {isLoading ? (
          <div className="loading-section">
            <AiOutlineLoading3Quarters className="loading-icon" />
          </div>
        ) : foundTasks ? (
          <div className="card-main-section">
            {tasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task.task}
                id={task.id}
                completed={task.completed}
                onToggle={() => toggleTaskCompletion(task.id)}
                onTaskUpdate={handleTaskUpdate}
                onTaskDelete={handleTaskDelete}
              />
            ))}
          </div>
        ) : (
          <div className="card-intro-section">
            <MdPlaylistAddCircle
              className="starting-button"
              onClick={() => setFoundTasks(true)}
            />
            <h4 className="starting-heading">
              Click Here To Add Your First Task
            </h4>
          </div>
        )}
      </div>
    </>
  );
}

export default TodoList;

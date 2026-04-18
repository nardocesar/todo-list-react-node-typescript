import React, { useEffect, useState } from "react";
import { fetchTasks, deleteTask, updateTask } from "../services/taskService";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskList: React.FC<{ taskCounter: number }> = ({ taskCounter }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    };
    getTasks();
  }, [taskCounter]);

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = async (id: number, completed: boolean) => {
    const updatedTask = await updateTask(id, undefined, !completed);
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
            <button
              onClick={() => handleToggleComplete(task.id, task.completed)}
            >
              {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

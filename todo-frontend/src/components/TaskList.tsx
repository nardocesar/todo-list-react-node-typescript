import React, { useEffect, useState } from "react";
import { fetchTasks, deleteTask, updateTask } from "../services/taskService";
import { CompleteButton } from "./CompleteButton";
import { TaskStatus } from "./TaskFilter";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const filterTasks = (filter: TaskStatus, task: Task) => {
  if (filter === "completed" && task.completed) return task;
  if (filter === "uncompleted" && !task.completed) return task;
  if (filter === "all") return task;

  return null;
};

const TaskList: React.FC<{ taskCounter: number; filter: TaskStatus }> = ({
  taskCounter,
  filter,
}) => {
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
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">Task List</h2>
      <ul className="flex flex-col gap-2">
        {tasks
          .filter((item) => filterTasks(filter, item))
          .map((task) => (
            <li className="flex gap-2 items-center" key={task.id}>
              <CompleteButton
                completed={task.completed}
                onClick={() => handleToggleComplete(task.id, task.completed)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </span>

              <button
                className="text-sm font-bold"
                onClick={() => handleDelete(task.id)}
              >
                x
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TaskList;

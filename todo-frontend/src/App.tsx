import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter, { TaskStatus } from "./components/TaskFilter";

const App: React.FC = () => {
  const [filter, setFilter] = useState<TaskStatus>("all");
  const [taskCounter, setTaskCounter] = useState(0);

  return (
    <div className="container flex flex-col gap-4 mx-auto p-4 ">
      <h1 className="text-4xl font-bold">To-Do List</h1>
      <TaskForm onTaskAdded={() => setTaskCounter(taskCounter + 1)} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList taskCounter={taskCounter} filter={filter} />
    </div>
  );
};

export default App;

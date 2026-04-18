import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

const App: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [taskCounter, setTaskCounter] = useState(0);

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onTaskAdded={() => setTaskCounter(taskCounter + 1)} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList taskCounter={taskCounter} />
    </div>
  );
};

export default App;

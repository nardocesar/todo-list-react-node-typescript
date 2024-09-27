import React from "react";

export type TaskStatus = "all" | "completed" | "uncompleted";
interface TaskFilterProps {
  filter: TaskStatus;
  setFilter: (filter: TaskStatus) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-2 items-center">
      <label className="text-sm">Filter Tasks: </label>
      <select
        className="bg-white border py-1 px-2 rounded-md"
        value={filter}
        onChange={(e) => setFilter(e.target.value as TaskStatus)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default TaskFilter;

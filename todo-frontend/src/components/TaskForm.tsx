import React, { useState } from "react";
import { addTask } from "../services/taskService";

const TaskForm: React.FC<{ onTaskAdded: () => void }> = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addTask(title);
    setTitle("");
    onTaskAdded();
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
        required
        className="border rounded-lg border-gray-300 py-1 px-2 text-sm"
      />
      <button
        className="text-sm bg-blue-500 p-1 rounded-md text-white font-bold transition-all hover:bg-blue-600"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;

import axios from "axios";

const API_URL = "http://localhost:5001/api/tasks";

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (title: string) => {
  const response = await axios.post(API_URL, { title });
  return response.data;
};

export const updateTask = async (
  id: number,
  title?: string,
  completed?: boolean
) => {
  const response = await axios.patch(`${API_URL}/${id}`, { title, completed });
  return response.data;
};

export const deleteTask = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};

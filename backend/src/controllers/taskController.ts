import { Request, Response } from 'express';
import { getAllTasks, createNewTask, updateTaskById, deleteTaskById } from '../services/taskService';

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await getAllTasks();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });
  const newTask = await createNewTask(title);
  res.status(201).json(newTask);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const updatedTask = await updateTaskById(Number(id), title, completed);
  if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
  res.json(updatedTask);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedTask = await deleteTaskById(Number(id));
  if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
  res.status(204).end();
};

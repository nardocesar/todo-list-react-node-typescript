import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllTasks = async () => {
  return await prisma.task.findMany();
};

export const createNewTask = async (title: string) => {
  return await prisma.task.create({
    data: { title }
  });
};

export const updateTaskById = async (id: number, title?: string, completed?: boolean) => {
  return await prisma.task.update({
    where: { id },
    data: { title, completed }
  });
};

export const deleteTaskById = async (id: number) => {
  return await prisma.task.delete({
    where: { id }
  });
};

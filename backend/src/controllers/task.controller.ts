import { Response } from "express";
import { prisma } from "../config/db";

export const createTask = async (req: any, res: Response) => {
  const { title } = req.body;

  const task = await prisma.task.create({
    data: { title, userId: req.userId },
  });

  res.json(task);
};

export const getTasks = async (req: any, res: Response) => {
  const { page = 1, limit = 10, search = "", status } = req.query;

  const tasks = await prisma.task.findMany({
    where: {
      userId: req.userId,
      title: { contains: search, mode: "insensitive" },
      ...(status && { completed: status === "true" }),
    },
    skip: (Number(page) - 1) * Number(limit),
    take: Number(limit),
  });

  res.json(tasks);
};

export const updateTask = async (req: any, res: Response) => {
  const id = Number(req.params.id);

  const task = await prisma.task.update({
    where: { id },
    data: req.body,
  });

  res.json(task);
};

export const toggleTask = async (req: any, res: Response) => {
  const id = Number(req.params.id);

  const task = await prisma.task.findUnique({ where: { id } });

  const updated = await prisma.task.update({
    where: { id },
    data: { completed: !task?.completed },
  });

  res.json(updated);
};

export const deleteTask = async (req: any, res: Response) => {
  const id = Number(req.params.id);

  await prisma.task.delete({ where: { id } });

  res.json({ message: "Deleted" });
};
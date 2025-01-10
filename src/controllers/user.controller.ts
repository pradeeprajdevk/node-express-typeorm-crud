import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/user.entity";

export const getAllUsers = async(req: Request, res: Response) => {
  const users = await getRepository(User).find();
  res.json(users);
}

export const createUser = async (req: Request, res: Response) => {
  const user = getRepository(User).create(req.body);
  const result = await getRepository(User).save(user);
  res.status(201).json(result);
}

export const getUserById = async (req: Request, res: Response) => {
  const user = await getRepository(User).findOne({
    where: { id: Number(req.params.id) }
  });
  user ? res.json(user) : res.status(404).json({ message: "User not found." });
}

export const updateUser = async (req: Request, res: Response) => {
  const user = await getRepository(User).findOne({
    where: { id: Number(req.params.id) }
  });
  if (user) {
    getRepository(User).merge(user, req.body);
    const result = await getRepository(User).save(user);
    res.json(result);
  } else { 
    res.status(404).json({ message: "User not found" });
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const result = await getRepository(User).delete(Number(req.params.id));
  result.affected ? res.json({ message: "User Deleted" }) : res.status(404).json({ message: "User not found" })
}
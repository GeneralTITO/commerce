import { Request, Response } from "express";
import { funcionarioServices } from '../services'
import {FuncionarioReturn, FuncionarioRead } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: FuncionarioReturn = await funcionarioServices.create(req.body);
  return res.status(201).json(user);
};
const read = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = Number(req.params.id);
  const user = await funcionarioServices.read(userId);
  return res.status(200).json(user);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const user: FuncionarioReturn = await funcionarioServices.update(req.body, id);
  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await funcionarioServices.destroy(res.locals.foundEntity);
  return res.status(204).json();
};


const readAll = async (req: Request, res: Response): Promise<Response> => {
  const clientes: FuncionarioRead = await funcionarioServices.readAll();
  return res.status(200).json(clientes);
};

export default { create, read, update, destroy, readAll };
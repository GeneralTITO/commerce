import { Request, Response } from "express";
import { produtoServices } from '../services'
import { ProdutoReturn, ProdutoRead } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
    const produto: ProdutoReturn = await produtoServices.create(req.body);
    return res.status(201).json(produto);
};
const read = async (req: Request, res: Response): Promise<Response> => {
    const produtoId: number = Number(req.params.id);
    const produto = await produtoServices.read(produtoId);
    console.log(produto)
    return res.status(200).json(produto);
};

const update = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.id);
    const produto: ProdutoReturn = await produtoServices.update(req.body, id);
    return res.status(200).json(produto);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await produtoServices.destroy(res.locals.foundEntity);
    return res.status(204).json();
};


const readAll = async (req: Request, res: Response): Promise<Response> => {
    const produto = await produtoServices.readAll();
    return res.status(200).json(produto);
};

export default { create, read, update, destroy, readAll };
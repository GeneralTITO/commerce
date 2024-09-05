import { Request, Response } from "express";
import { vendasServices } from "../services";
import { VendaReturn } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
    const venda: VendaReturn = await vendasServices.create(req.body);
    return res.status(201).json(venda);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const vendaId: number = Number(req.params.id);
    const venda = await vendasServices.read(vendaId);
    return res.status(200).json(venda);
};

const update = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.id);
    const venda: VendaReturn = await vendasServices.updateClose(req.body, id);
    return res.status(200).json(venda);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await vendasServices.destroy(res.locals.foundEntity);
    return res.status(204).json();
};

const readAll = async (req: Request, res: Response): Promise<Response> => {
    const vendas = await vendasServices.readAll();
    return res.status(200).json(vendas);
};

export default { create, read, update, destroy, readAll };
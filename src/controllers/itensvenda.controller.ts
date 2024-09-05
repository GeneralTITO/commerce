import { Request, Response } from "express";
import { itensvendaServices } from "../services";
import { ItensVendaReturn } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
    const itensVenda: ItensVendaReturn = await itensvendaServices.create(req.body);
    return res.status(201).json(itensVenda);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const itensVendaId: number = Number(req.params.id);
    const itensVenda = await itensvendaServices.read(itensVendaId);
    return res.status(200).json(itensVenda);
};

const update = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.id);
    const itensVenda: ItensVendaReturn = await itensvendaServices.update(req.body, id);
    return res.status(200).json(itensVenda);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await itensvendaServices.destroy(res.locals.foundEntity);
    return res.status(204).json();
};

const readAll = async (req: Request, res: Response): Promise<Response> => {
    const itensVenda = await itensvendaServices.readAll();
    return res.status(200).json(itensVenda);
};

export default { create, read, update, destroy, readAll };
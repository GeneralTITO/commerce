import { NextFunction, Request, Response } from "express";
import { ItensVenda } from "../entities";
import { itensvendaRepository } from "../repositories";
import { AppError } from "../errors";

export const ItensVendaExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const id: number = Number(req.params.id);

    const foundEntity: ItensVenda | null = await itensvendaRepository.findOne({
        where: { id: id }, relations: ['produto']
    });
    if (!foundEntity) throw new AppError("Item da venda not found", 404);

    res.locals = { ...res.locals, foundEntity };

    return next();
};
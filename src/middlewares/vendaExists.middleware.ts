import { NextFunction, Request, Response } from "express";
import { Venda } from "../entities";
import { vendaRepository } from "../repositories";
import { AppError } from "../errors";

export const VendaExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const id: number = Number(req.params.id);

    const foundEntity: Venda | null = await vendaRepository.findOne({
        where: { id: id },
    });
    if (!foundEntity) throw new AppError("Venda not found", 404);

    res.locals = { ...res.locals, foundEntity };

    return next();
};
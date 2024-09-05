import { NextFunction, Request, Response } from "express";
import { Produto } from "../entities";
import { produtoRepository } from "../repositories";
import { AppError } from "../errors";

export const ProdutoExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const id: number = Number(req.params.id);

    const foundEntity: Produto | null = await produtoRepository.findOne({
        where: { id: id },
    });
    if (!foundEntity) throw new AppError("Produto not found", 404);

    res.locals = { ...res.locals, foundEntity };

    return next();
};
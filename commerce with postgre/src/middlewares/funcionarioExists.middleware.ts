import { NextFunction, Request, Response } from "express";
import { Funcionario } from "../entities";
import { funcionarioRepository } from "../repositories";
import { AppError } from "../errors";

export const FuncionarioExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const id: number = Number(req.params.id);

    const foundEntity: Funcionario | null = await funcionarioRepository.findOne({
        where: { id: id },
    });
    if (!foundEntity) throw new AppError("funcionario not found", 404);

    res.locals = { ...res.locals, foundEntity };

    return next();
};
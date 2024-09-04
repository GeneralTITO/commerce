import { NextFunction, Request, Response } from "express";
import { Cliente } from "../entities";
import { clientRepository } from "../repositories";
import { AppError } from "../errors";

export const ClienteExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundEntity: Cliente | null = await clientRepository.findOne({
    where: { id: id },
  });
  if (!foundEntity) throw new AppError("Cliente not found", 404);

  res.locals = { ...res.locals, foundEntity };

  return next();
};
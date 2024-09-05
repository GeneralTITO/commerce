import { Router } from "express";
import middlewares from "../middlewares";
import { funcionarioCreateSchema, funcionarioUpdateSchema } from "../schemas";
import { funcionarioController } from "../controllers";

export const FuncionarioRouter: Router = Router();

FuncionarioRouter.post(
    "/",
    middlewares.validateBody(funcionarioCreateSchema),
    funcionarioController.create
);
FuncionarioRouter.get("/", funcionarioController.readAll);

FuncionarioRouter.get("/:id", middlewares.FuncionarioExists, funcionarioController.read);


FuncionarioRouter.patch(
    "/:id",
    middlewares.validateBody(funcionarioUpdateSchema),
    funcionarioController.update
);

FuncionarioRouter.delete(
    "/:id",
    middlewares.FuncionarioExists,
    funcionarioController.destroy
);


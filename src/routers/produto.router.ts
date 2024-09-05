import { Router } from "express";
import middlewares from "../middlewares";
import { produtoCreateSchema, produtoUpdateSchema } from "../schemas";
import { produtoController } from "../controllers";

export const ProdutoRouter: Router = Router();

ProdutoRouter.post(
    "/",
    middlewares.validateBody(produtoCreateSchema),
    produtoController.create
);
ProdutoRouter.get("/", produtoController.readAll);

ProdutoRouter.get("/:id", middlewares.ProdutoExists, produtoController.read);


ProdutoRouter.patch(
    "/:id",
    middlewares.validateBody(produtoUpdateSchema),
    produtoController.update
);

ProdutoRouter.delete(
    "/:id",
    middlewares.ProdutoExists,
    produtoController.destroy
);


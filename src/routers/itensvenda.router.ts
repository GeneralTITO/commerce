import { Router } from "express";
import middlewares from "../middlewares";
import { itensVendaCreateSchema, itensVendaUpdateSchema } from "../schemas";
import { itensvendaController } from "../controllers";

export const ItensVendaRouter: Router = Router();

ItensVendaRouter.post(
    "/",
    middlewares.validateBody(itensVendaCreateSchema),
    itensvendaController.create
);

ItensVendaRouter.get("/", itensvendaController.readAll);

ItensVendaRouter.get("/:id", middlewares.ItensVendaExists, itensvendaController.read);

ItensVendaRouter.patch(
    "/:id",
    middlewares.validateBody(itensVendaUpdateSchema),
    itensvendaController.update
);

ItensVendaRouter.delete(
    "/:id",
    middlewares.ItensVendaExists,
    itensvendaController.destroy
);
import { Router } from "express";
import middlewares from "../middlewares";
import { vendaCreateSchema, vendaUpdateSchema } from "../schemas";
import { vendasController } from "../controllers";

export const VendaRouter: Router = Router();

VendaRouter.post(
    "/",
    middlewares.validateBody(vendaCreateSchema),
    vendasController.create
);

VendaRouter.get("/", vendasController.readAll);

VendaRouter.get("/:id", middlewares.VendaExists, vendasController.read);

VendaRouter.patch(
    "/:id",
    middlewares.validateBody(vendaUpdateSchema),
    vendasController.update
);

VendaRouter.delete(
    "/:id",
    middlewares.VendaExists,
    vendasController.destroy
);
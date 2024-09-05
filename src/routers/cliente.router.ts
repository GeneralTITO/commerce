import { Router } from "express";
import middlewares from "../middlewares";
import { clienteCreateSchema, clientUpdateSchema } from "../schemas";
import { clientController } from "../controllers";

export const ClienteRouter: Router = Router();

ClienteRouter.post(
  "/",
  middlewares.validateBody(clienteCreateSchema),
  clientController.create
);
ClienteRouter.get("/", clientController.readAll);

ClienteRouter.get("/:id", middlewares.ClienteExists, clientController.read);


ClienteRouter.patch(
  "/:id",
  middlewares.validateBody(clientUpdateSchema),
  clientController.update
);

ClienteRouter.delete(
  "/:id",
  middlewares.ClienteExists,
  clientController.destroy
);


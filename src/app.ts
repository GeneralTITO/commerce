import "express-async-errors";
import express, { Application, json } from "express";
import middlewares from "./middlewares";
import {
    ClienteRouter,
    FuncionarioRouter
} from "./routers";
import { ProdutoRouter } from "./routers/produto.router";

const app: Application = express();
app.use(json());

app.use("/clientes", ClienteRouter);
app.use("/funcionario", FuncionarioRouter);
app.use("/produto", ProdutoRouter);


app.use(middlewares.handleError);

export default app;
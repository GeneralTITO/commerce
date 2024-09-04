import { z } from "zod";
import { produtoCreateSchema, produtoReadSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Produto } from "../entities";

type ProdutoCreate = z.infer<typeof produtoCreateSchema>;
type ProdutoRead = z.infer<typeof produtoReadSchema>;
type ProdutoUpdate = DeepPartial<Produto>;

type ProdutoRepo = Repository<Produto>;

export {
    ProdutoCreate, ProdutoRead, ProdutoUpdate,
    ProdutoRepo
};
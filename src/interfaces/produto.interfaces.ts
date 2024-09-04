import { z } from "zod";
import { produtoCreateSchema, produtoReadSchema, produtoReturnSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Produto } from "../entities";

type ProdutoCreate = z.infer<typeof produtoCreateSchema>;
type ProdutoRead = z.infer<typeof produtoReadSchema>;
type ProdutoReturn = z.infer<typeof produtoReturnSchema>;
type ProdutoUpdate = DeepPartial<Produto>;

type ProdutoRepo = Repository<Produto>;

export {
    ProdutoCreate, ProdutoRead, ProdutoReturn, ProdutoUpdate,
    ProdutoRepo
};
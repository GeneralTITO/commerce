import { z } from "zod";

const produtoSchema = z.object({
    id: z.number().positive().nullable(),
    nome: z.string().max(150).nullable(),
    preco: z.number().positive().nullable(),
    quantidadeEmEstoque: z.number().positive().nullable(),
});

const produtoCreateSchema = produtoSchema.omit({
    id: true,
});

const produtoUpdateSchema = produtoCreateSchema.partial();


const produtoReadSchema = produtoSchema.array();

export { produtoSchema, produtoCreateSchema, produtoUpdateSchema, produtoReadSchema };

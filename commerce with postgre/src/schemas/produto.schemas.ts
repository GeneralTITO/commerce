import { z } from "zod";

const produtoSchema = z.object({
    id: z.number().positive(),
    nome: z.string().max(150),
    preco: z.number().positive(),
    quantidadeEmEstoque: z.number()
});

const produtoCreateSchema = produtoSchema.omit({
    id: true,
});


const produtoUpdateSchema = produtoCreateSchema.partial();

const produtoReturnSchema  = produtoSchema.omit({})
const produtoReadSchema = produtoReturnSchema.array();

export { produtoSchema, produtoCreateSchema, produtoUpdateSchema, produtoReadSchema, produtoReturnSchema };

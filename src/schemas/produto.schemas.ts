import { z } from "zod";

const produtoSchema = z.object({
    id: z.number().positive().nullable(),
    nome: z.string().max(150).nullable(),
    preco: z.number().positive().nullable(),
    quantidadeEmEstoque: z.number().positive().nullable(),
    // itensVendas: z.array(ItensVenda).optional(), // Referência omitida, seria usada em outro contexto
});

const produtoCreateSchema = produtoSchema.omit({
    id: true,
});

const produtoUpdateSchema = produtoCreateSchema.partial();

const produtoReturnSchema = produtoSchema;

const produtoReadSchema = produtoReturnSchema.array();

export { produtoSchema, produtoCreateSchema, produtoUpdateSchema, produtoReturnSchema, produtoReadSchema };

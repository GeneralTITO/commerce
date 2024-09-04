import { z } from "zod";

const produtoSchema = z.object({
    id: z.number().positive(),
    nome: z.string().max(150),
    preco: z.number().positive(),
    quantidadeEmEstoque: z.number().positive(),
    itensVenda: z.array(z.any()).optional()
});

const produtoCreateSchema = produtoSchema.omit({
    id: true,
});


const produtoUpdateSchema = produtoCreateSchema.partial();

const produtoReturnSchema  = produtoSchema.omit({itensVenda:true})
const produtoReadSchema = produtoReturnSchema.array();

export { produtoSchema, produtoCreateSchema, produtoUpdateSchema, produtoReadSchema, produtoReturnSchema };

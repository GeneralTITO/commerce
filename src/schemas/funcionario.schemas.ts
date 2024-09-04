import { z } from "zod";
import { vendaSchema } from "./venda.schemas";

const funcionarioSchema = z.object({
    id: z.number().positive().nullable(),
    nome: z.string().max(150).nullable(),
    cargo: z.string().max(100).nullable(),
    telefone: z.string().max(50).nullable(),
    vendas: vendaSchema
});

const funcionarioCreateSchema = funcionarioSchema.omit({
    id: true,
    vendas:true
});

const funcionarioUpdateSchema = funcionarioCreateSchema.partial();

const funcionarioReturnSchema = funcionarioSchema.omit({
    vendas:true
});

const funcionarioReadSchema = funcionarioReturnSchema.array();

export { funcionarioSchema, funcionarioCreateSchema, funcionarioUpdateSchema, funcionarioReturnSchema, funcionarioReadSchema };

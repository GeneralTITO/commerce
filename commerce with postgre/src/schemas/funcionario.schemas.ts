import { z } from "zod";
import { vendaSchema } from "./venda.schemas";

const funcionarioSchema = z.object({
    id: z.number().positive(),
    nome: z.string().max(150),
    cargo: z.string().max(100),
    telefone: z.string().max(50),
});

const funcionarioCreateSchema = funcionarioSchema.omit({
    id: true,
});

const funcionarioUpdateSchema = funcionarioCreateSchema.partial();

const funcionarioReturnSchema = funcionarioSchema.omit({
});

const funcionarioReadSchema = funcionarioReturnSchema.array();

export { funcionarioSchema, funcionarioCreateSchema, funcionarioUpdateSchema, funcionarioReturnSchema, funcionarioReadSchema };

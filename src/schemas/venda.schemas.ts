import { z } from "zod";
import { clientReturnSchema } from "./Client.schemas";
import { funcionarioReturnSchema } from "./funcionario.schemas";
import { itensVendaSchema } from "./itensvenda.schema";

const vendaSchema = z.object({
    id: z.number().positive().nullable(),
    data: z.date().nullable(),
    status: z.enum(['Em Curso', 'Concluída']).default('Em Curso'),
    cliente: clientReturnSchema,
});

const vendaCreateSchema = vendaSchema.omit({
    id: true,
});

const vendaUpdateSchema = vendaCreateSchema.partial();

const vendaReadSchema = vendaSchema.array();

export { vendaSchema, vendaCreateSchema, vendaUpdateSchema, vendaReadSchema };

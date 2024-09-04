import { z } from "zod";

const vendaSchema = z.object({
    id: z.number().positive().nullable(),
    data: z.date().nullable(),
    status: z.enum(['Em Curso', 'Concluída']).default('Em Curso'),
    // cliente: z.instanceof(Cliente).optional(), // Referência omitida, seria usada em outro contexto
    // funcionario: z.instanceof(Funcionario).optional(), // Referência omitida, seria usada em outro contexto
    // itensVendas: z.array(ItensVenda).optional(), // Referência omitida, seria usada em outro contexto
});

const vendaCreateSchema = vendaSchema.omit({
    id: true,
});

const vendaUpdateSchema = vendaCreateSchema.partial();

const vendaReturnSchema = vendaSchema;

const vendaReadSchema = vendaReturnSchema.array();

export { vendaSchema, vendaCreateSchema, vendaUpdateSchema, vendaReturnSchema, vendaReadSchema };

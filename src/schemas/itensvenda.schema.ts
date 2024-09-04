import { z } from "zod";

const itensVendaSchema = z.object({
    id: z.number().positive().nullable(),
    quantidade: z.number().positive().nullable(),
    precoTotal: z.number().positive().nullable(),
    // venda: z.instanceof(Venda).optional(), // Referência omitida, seria usada em outro contexto
    // produto: z.instanceof(Produto).optional(), // Referência omitida, seria usada em outro contexto
});

const itensVendaCreateSchema = itensVendaSchema.omit({
    id: true,
});

const itensVendaUpdateSchema = itensVendaCreateSchema.partial();

const itensVendaReturnSchema = itensVendaSchema;

const itensVendaReadSchema = itensVendaReturnSchema.array();

export { itensVendaSchema, itensVendaCreateSchema, itensVendaUpdateSchema, itensVendaReturnSchema, itensVendaReadSchema };

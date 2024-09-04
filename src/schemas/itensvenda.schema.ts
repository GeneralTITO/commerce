import { z } from "zod";

import { vendaSchema } from "./venda.schemas";
import { produtoSchema } from "./produto.schemas";

const itensVendaSchema = z.object({
    id: z.number().positive().nullable(),
    quantidade: z.number().positive().nullable(),
    precoTotal: z.number().positive().nullable(),
    venda: vendaSchema,
    produto: produtoSchema,
});

const itensVendaCreateSchema = itensVendaSchema.omit({
    id: true,
});

const itensVendaUpdateSchema = itensVendaCreateSchema.partial();


const itensVendaReadSchema = itensVendaSchema.array();

export { itensVendaSchema, itensVendaCreateSchema, itensVendaUpdateSchema, itensVendaReadSchema };

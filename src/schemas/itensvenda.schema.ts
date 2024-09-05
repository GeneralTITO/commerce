import { z } from "zod";
import { vendaSchema } from "./venda.schemas";
import { produtoSchema } from "./produto.schemas";

const vendaIdSchema = vendaSchema.pick({ id: true })
const produtoIdSchema = vendaSchema.pick({ id: true })

const itensVendaSchema = z.object({
    id: z.number().positive(),
    quantidade: z.number().positive(),
    precoTotal: z.number().positive(),
    venda: vendaSchema,
    produto: produtoSchema,
});

const itensVendaCreateSchema = itensVendaSchema.omit({
    id: true, precoTotal: true
}).extend({ venda: vendaIdSchema, produto: produtoIdSchema });

const itensVendaUpdateSchema = itensVendaCreateSchema.partial();

const itensVendaReturnSchema = itensVendaSchema.extend({ venda: vendaIdSchema, produto: produtoIdSchema })


const itensVendaReadSchema = itensVendaReturnSchema.array();

export { itensVendaSchema, itensVendaCreateSchema, itensVendaUpdateSchema, itensVendaReadSchema, itensVendaReturnSchema };

import { z } from "zod";
import { clientSchema } from "./client.schemas";
import { itensVendaReadSchema, itensVendaReturnSchema, itensVendaSchema } from "./itensvenda.schema";


const clientIdSchema = clientSchema.pick({ id: true })
const clientIdName = clientSchema.pick({ id: true, nome: true })

const vendaSchema = z.object({
    id: z.number().positive(),
    data: z.date(),
    status: z.enum(['Em Curso', 'Concluída']).default('Em Curso'),
    cliente: clientSchema,
});

const vendaCreateSchema = vendaSchema.omit({
    id: true,
}).extend({ cliente: clientIdSchema, data: z.string().max(20) });

const vendaUpdateSchema = vendaCreateSchema.partial();

const vendaReuturnSchema = vendaSchema.extend({ cliente: clientIdName })
const vendaReuturndataStringSchema = vendaSchema.extend({ cliente: clientIdName, data: z.string() })

const vendaReturnItensSchema = vendaReuturnSchema.extend({itensvendas: itensVendaReadSchema})


const vendaReadSchema = vendaReuturndataStringSchema.array();

export { vendaSchema, vendaCreateSchema, vendaUpdateSchema, vendaReadSchema, vendaReuturnSchema, vendaReturnItensSchema };

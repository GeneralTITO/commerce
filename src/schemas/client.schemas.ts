import { z } from "zod";
import { vendaSchema } from "./venda.schemas";

const clientSchema = z.object({
    id: z.number().positive().nullable(),
    nome: z.string().max(150).nullable(),
    cpf: z.string().max(50).nullable(),
    email: z.string().max(100).email().nullable(),
    endereco: z.string().max(1000).nullable(),
    telefone: z.string().max(50).nullable()
})

const clienteCreateSchema = clientSchema.omit({
    id: true,

})

const clientUpdateSchema = clienteCreateSchema.omit({
    cpf: true,

})

const clientReturnSchema = clientSchema.omit({
    cpf: true,
})
const clientReadSchema = clientReturnSchema.array()



export { clientUpdateSchema, clientSchema, clienteCreateSchema, clientReadSchema,clientReturnSchema }


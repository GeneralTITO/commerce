import { z } from "zod";
import { vendaSchema } from "./venda.schemas";

const clientSchema = z.object({
    id: z.number().positive(),
    nome: z.string().max(150),
    cpf: z.string().max(50),
    email: z.string().max(100).email(),
    endereco: z.string().max(1000),
    telefone: z.string().max(50)
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


import { z } from "zod";
import { clienteCreateSchema, clientReadSchema, clientReturnSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Cliente } from "../entities";


type ClienteCreate = z.infer<typeof clienteCreateSchema>
type ClienteRead = z.infer<typeof clientReadSchema>
type ClienteReturn = z.infer<typeof clientReturnSchema>
type ClienteUpdate = DeepPartial<Cliente>

type UserRepo = Repository<Cliente>


export {ClienteCreate,ClienteRead,ClienteReturn,ClienteUpdate,UserRepo}
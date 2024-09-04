import { z } from "zod";
import { vendaCreateSchema, vendaReadSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Venda } from "../entities";

type VendaCreate = z.infer<typeof vendaCreateSchema>;
type VendaRead = z.infer<typeof vendaReadSchema>;
type VendaUpdate = DeepPartial<Venda>;

type VendaRepo = Repository<Venda>;

export {
    VendaCreate, VendaRead, VendaUpdate,
    VendaRepo
};
import { z } from "zod";
import { vendaCreateSchema, vendaReadSchema, vendaReuturnSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Venda } from "../entities";

type VendaCreate = z.infer<typeof vendaCreateSchema>;
type VendaRead = z.infer<typeof vendaReadSchema>;
type VendaReturn = z.infer<typeof vendaReuturnSchema>;

type VendaUpdate = DeepPartial<Venda>;

type VendaRepo = Repository<Venda>;

export {
    VendaCreate, VendaRead, VendaUpdate,
    VendaRepo, VendaReturn
};
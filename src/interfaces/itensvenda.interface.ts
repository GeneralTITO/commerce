import { z } from "zod";
import { itensVendaCreateSchema, itensVendaReadSchema, itensVendaReturnSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { ItensVenda } from "../entities";

type ItensVendaCreate = z.infer<typeof itensVendaCreateSchema>;
type ItensVendaRead = z.infer<typeof itensVendaReadSchema>;
type ItensVendaReturn = z.infer<typeof itensVendaReturnSchema>;

type ItensVendaUpdate = DeepPartial<ItensVenda>;

type ItensVendaRepo = Repository<ItensVenda>;

export {
    ItensVendaCreate, ItensVendaRead,  ItensVendaUpdate,
    ItensVendaRepo, ItensVendaReturn
};
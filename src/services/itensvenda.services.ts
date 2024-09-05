import { ItensVenda } from "../entities";
import { ItensVendaCreate, ItensVendaRead, ItensVendaReturn, ItensVendaUpdate } from "../interfaces";
import { itensVendaReadSchema, itensVendaReturnSchema } from "../schemas";
import { itensVendaRepository } from "../repositories";

const create = async (payload: ItensVendaCreate): Promise<ItensVendaReturn> => {
  const itensVenda: ItensVenda = itensVendaRepository.create(payload);
  await itensVendaRepository.save(itensVenda);
  return itensVendaReturnSchema.parse(itensVenda);
};

const read = async (itensVendaId: number): Promise<ItensVendaReturn> => {
  const itensVenda = await itensVendaRepository.findOne({
    where: { id: itensVendaId },
  });
  return itensVendaReturnSchema.parse(itensVenda);
};

const readAll = async (): Promise<ItensVendaRead> => {
  const itensVenda = await itensVendaRepository.find({
    order: { id: "ASC" }
  });
  return itensVendaReadSchema.parse(itensVenda);
};

const update = async (payload: ItensVendaUpdate, id: number): Promise<ItensVendaReturn> => {
  const itensVendaFound: ItensVenda | null = await itensVendaRepository.findOne({
    where: { id: id },
  });

  if (!itensVendaFound) {
    throw new Error("Item da venda não encontrado");
  }

  const itensVendaUpdated: ItensVenda = itensVendaRepository.create({
    ...itensVendaFound,
    ...payload,
  });

  await itensVendaRepository.save(itensVendaUpdated);

  const itensVenda = itensVendaReturnSchema.parse(itensVendaUpdated);

  return itensVenda;
};

const destroy = async (itensVenda: ItensVenda): Promise<void> => {
  await itensVendaRepository.remove(itensVenda);
};

export default { create, read, update, destroy, readAll };
import { Venda } from "../entities";
import { VendaCreate, VendaRead, VendaReturn, VendaUpdate } from "../interfaces";
import { vendaReadSchema, vendaReuturnSchema } from "../schemas";
import { vendaRepository } from "../repositories";

const create = async (payload: VendaCreate): Promise<VendaReturn> => {
  const venda: Venda = vendaRepository.create(payload);
  await vendaRepository.save(venda);
  return vendaReuturnSchema.parse(venda);
};

const read = async (vendaId: number): Promise<VendaReturn> => {
  const venda = await vendaRepository.findOne({
    where: { id: vendaId },
  });
  return vendaReuturnSchema.parse(venda);
};

const readAll = async (): Promise<VendaRead> => {
  const vendas = await vendaRepository.find({
    order: { id: "ASC" }
  });
  return vendaReadSchema.parse(vendas);
};

const update = async (payload: VendaUpdate, id: number): Promise<VendaReturn> => {
  const vendaFound: Venda | null = await vendaRepository.findOne({
    where: { id: id },
  });
  const vendaUpdated: Venda = vendaRepository.create({
    ...vendaFound,
    ...payload,
  });

  await vendaRepository.save(vendaUpdated);

  const venda = vendaReuturnSchema.parse(vendaUpdated);

  return venda;
};

const destroy = async (venda: Venda): Promise<void> => {
  await vendaRepository.remove(venda);
};

export default { create, read, update, destroy, readAll };
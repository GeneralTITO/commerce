import { ItensVenda } from "../entities";
import { ItensVendaCreate, ItensVendaRead, ItensVendaReturn, ItensVendaUpdate } from "../interfaces";
import { itensVendaReadSchema, itensVendaReturnSchema } from "../schemas";
import { itensvendaRepository, produtoRepository, vendaRepository } from "../repositories";
import { AppError } from "../errors";

const create = async (payload: ItensVendaCreate): Promise<ItensVendaReturn> => {
    const produtoFound = await produtoRepository.findOne({
      where: { id: payload.produto.id },  
    });
  
    if (!produtoFound) {
      throw new AppError('Produto not found', 400);
    }

    const vendaFound = await vendaRepository.findOne({
      where: { id: payload.venda.id }, 
    });
  
    if (!vendaFound) {
        throw new AppError('Venda not found', 400);
      }
  
    const itensVenda = itensvendaRepository.create({
      ...payload,
      produto:produtoFound,
      venda:vendaFound,    
    });
  

    await itensvendaRepository.save(itensVenda);
  
    return itensVendaReturnSchema.parse(itensVenda);
  };

const read = async (itensVendaId: number): Promise<ItensVendaReturn> => {
  const itensVenda = await itensvendaRepository.findOne({
    where: { id: itensVendaId },
  });
  return itensVendaReturnSchema.parse(itensVenda);
};

const readAll = async (): Promise<ItensVendaRead> => {
  const itensVenda = await itensvendaRepository.find({
    order: { id: "ASC" }
  });
  return itensVendaReadSchema.parse(itensVenda);
};

const update = async (payload: ItensVendaUpdate, id: number): Promise<ItensVendaReturn> => {
  const itensVendaFound: ItensVenda | null = await itensvendaRepository.findOne({
    where: { id: id },
  });

  if (!itensVendaFound) {
    throw new Error("Item da venda não encontrado");
  }

  const itensVendaUpdated: ItensVenda = itensvendaRepository.create({
    ...itensVendaFound,
    ...payload,
  });

  await itensvendaRepository.save(itensVendaUpdated);

  const itensVenda = itensVendaReturnSchema.parse(itensVendaUpdated);

  return itensVenda;
};

const destroy = async (itensVenda: ItensVenda): Promise<void> => {
  await itensvendaRepository.remove(itensVenda);
};

export default { create, read, update, destroy, readAll };
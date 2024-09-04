import { Produto } from "../entities";
import { ProdutoCreate, ProdutoRead, ProdutoUpdate } from "../interfaces";
import { produtoReadSchema, produtoSchema } from "../schemas";
import { produtoRepository } from "../repositories";

const create = async (payload: ProdutoCreate): Promise<Produto> => {
  const Produto: Produto = produtoRepository.create(payload);
  await produtoRepository.save(Produto);
  return produtoSchema.parse(Produto);
};

const read = async (ProdutoId: number): Promise<Produto> => {
  const Produto = await produtoRepository.findOne({
    where: { id: ProdutoId },
  });
  return produtoSchema.parse(Produto);
};

const readAll = async (): Promise<ProdutoRead> => {
  const Produto = await produtoRepository.find({
    order:{id: "asc"}
  });
  return produtoReadSchema.parse(Produto);
};

const update = async (payload: ProdutoUpdate, id: number): Promise<Produto> => {
  const ProdutoFound: Produto | null = await produtoRepository.findOne({
    where: { id: id },
  });

  const ProdutoUpdated: Produto = produtoRepository.create({
    ...ProdutoFound!,
    ...payload,
  });

  await produtoRepository.save(ProdutoUpdated);

  const Produto = produtoSchema.parse(ProdutoUpdated);

  return Produto;
};

const destroy = async (Produto: Produto): Promise<void> => {
  await produtoRepository.remove(Produto);
};

export default { create, read, update, destroy, readAll};
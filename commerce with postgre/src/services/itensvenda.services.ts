import { ItensVenda } from "../entities";
import { ItensVendaCreate, ItensVendaReturn, ItensVendaUpdate } from "../interfaces";
import { itensVendaReturnSchema } from "../schemas";
import { itensvendaRepository, produtoRepository, vendaRepository } from "../repositories";
import { AppError } from "../errors";

const create = async (payload: ItensVendaCreate): Promise<any> => {
    const produtoFound = await produtoRepository.findOne({
        where: { id: payload.produto.id },
    });

    if (!produtoFound) {
        throw new AppError('Produto not found', 400);
    }
    if (produtoFound.quantidadeEmEstoque < payload.quantidade) {
        throw new AppError(`quantidade em estoque limitada em ${produtoFound.quantidadeEmEstoque}`, 400);
    }

    const preco = payload.quantidade * produtoFound.preco

    const noveEstoque = produtoFound.quantidadeEmEstoque - payload.quantidade


    const vendaFound = await vendaRepository.findOne({
        where: { id: payload.venda.id },
    });

    if (!vendaFound) {
        throw new AppError('Venda not found', 400);
    }
    if (vendaFound.status == 'Concluída') {
        throw new AppError('Essa venda já foi fechada', 500);
    }

    const itensVenda = itensvendaRepository.create({
        ...payload,
        produto: produtoFound,
        venda: vendaFound,
        precoTotal: preco
    });


    await itensvendaRepository.save(itensVenda);

    produtoFound.quantidadeEmEstoque = noveEstoque

    await produtoRepository.save(produtoFound);


    return itensVenda;
};

const read = async (itensVendaId: number): Promise<ItensVendaReturn> => {
    const itensVenda = await itensvendaRepository.findOne({
        where: { id: itensVendaId }, relations: ['itensvenda'],
    });
    return itensVendaReturnSchema.parse(itensVenda);
};

const readAll = async (): Promise<any> => {
    const itensVenda = await itensvendaRepository.find({
        relations: ['venda'], order: { id: "ASC" },
    });
    return itensVenda;
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
    
    const produto = itensVenda.produto;

    if (!produto) {
        throw new AppError('Produto não encontrado para o item de venda', 400);
    }

    produto.quantidadeEmEstoque += itensVenda.quantidade;

    await produtoRepository.save(produto);

    await itensvendaRepository.remove(itensVenda);
};

export default { create, read, update, destroy, readAll };
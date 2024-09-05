import { ItensVenda, Venda } from "../entities";
import { VendaCreate, VendaRead, VendaReturn, VendaUpdate } from "../interfaces";
import { vendaReadSchema, vendaReturnItensSchema, vendaReuturnSchema } from "../schemas";
import { clientRepository, itensvendaRepository, produtoRepository, vendaRepository } from "../repositories";
import { AppError } from "../errors";

const create = async (payload: VendaCreate): Promise<VendaReturn> => {


    const ClienteFound = await clientRepository.findOne({
        where: { id: payload.cliente.id },
    });

    if (!ClienteFound) {
        throw new AppError('Cliente not found', 400);
    }
    const dataobject = new Date(payload.data)
    const venda: Venda = vendaRepository.create({ ...payload, cliente: ClienteFound, data: dataobject });
    await vendaRepository.save(venda);
    return vendaReuturnSchema.parse(venda);
};

const read = async (vendaId: number): Promise<any> => {
    const venda = await vendaRepository.findOne({
        where: { id: vendaId }, relations: ['cliente'],
    });
    if (!venda) {
        throw new AppError('venda not found!')
    }

    const itensDaVenda = await itensvendaRepository.find({ where: { venda: venda } })
    const total = itensDaVenda.reduce((acc, item) => {
        const precoTotal = typeof item.precoTotal === 'string'
            ? parseFloat(item.precoTotal)
            : item.precoTotal;
        return acc + (precoTotal || 0);
    }, 0);
    const dataobj = new Date(venda?.data)
    venda.data = dataobj
    return {
        ...venda,
        itensDaVenda,
        total
    };
};

const readAll = async (): Promise<any> => {
    const vendas = await vendaRepository.find({
        order: { id: "ASC" }, relations: ['cliente']
    });
    return vendaReadSchema.parse(vendas);
};

const updateClose = async (payload: VendaUpdate, id: number): Promise<VendaReturn> => {
    const vendaFound: Venda | null = await vendaRepository.findOne({
        where: { id: id },
    });
    const vendaUpdated: Venda = vendaRepository.create({
        ...vendaFound,
        status: "Concluída",
    });

    await vendaRepository.save(vendaUpdated);

    return vendaUpdated;
};

const destroy = async (venda: Venda): Promise<void> => {
    if (venda.status === 'Concluída') {
        throw new AppError('Essa venda já foi fechada', 500);
    }

    const itensDaVenda = await itensvendaRepository.find({ where: { venda: venda }, relations: ['produto'] });

    for (const item of itensDaVenda) {
        const produto = item.produto;

        if (produto) {
            produto.quantidadeEmEstoque += item.quantidade;
            await produtoRepository.save(produto); 
        }
    }

    if (itensDaVenda.length > 0) {
        await itensvendaRepository.remove(itensDaVenda);
    }

    await vendaRepository.remove(venda);
};

export default { create, read, updateClose, destroy, readAll };
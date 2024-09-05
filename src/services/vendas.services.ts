import { Venda } from "../entities";
import { VendaCreate, VendaRead, VendaReturn, VendaUpdate } from "../interfaces";
import { vendaReadSchema, vendaReuturnSchema } from "../schemas";
import { clientRepository, vendaRepository } from "../repositories";
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

const read = async (vendaId: number): Promise<VendaReturn> => {
    const venda = await vendaRepository.findOne({
        where: { id: vendaId }, relations: ['cliente'],
    });
    if(venda){
        const dataobj =new Date (venda?.data)
        venda.data = dataobj
    }
    return vendaReuturnSchema.parse(venda);
};

const readAll = async (): Promise<any> => {
    const vendas = await vendaRepository.find({
        order: { id: "ASC" }, relations: ['cliente']
    });
    return vendaReadSchema.parse(vendas) ;
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
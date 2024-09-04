import { Cliente } from "../entities";
import { ClienteCreate, ClienteReturn } from "../interfaces";

const create = async (payload: ClienteCreate): Promise<ClienteReturn> => {
  const Cliente: Cliente = ClienteRepository.create(payload);
  await ClienteRepository.save(Cliente);
  return ClienteReturnSchema.parse(Cliente);
};

const read = async (ClienteId: number): Promise<ClienteReturn> => {
  const Cliente = await ClienteRepository.findOne({
    where: { id: ClienteId },
  });
  return ClienteReturnSchema.parse(Cliente);
};

const update = async (payload: ClienteUpdate, id: number): Promise<ClienteReturn> => {
  const ClienteFound: Cliente | null = await ClienteRepository.findOne({
    where: { id: id },
  });

  const ClienteUpdated: Cliente = ClienteRepository.create({
    ...ClienteFound!,
    ...payload,
  });

  await ClienteRepository.save(ClienteUpdated);

  const Cliente = ClienteReturnSchema.parse(ClienteUpdated);

  return Cliente;
};

const destroy = async (Cliente: Cliente): Promise<void> => {
  await ClienteRepository.remove(Cliente);
};

export default { create, read, update, destroy };
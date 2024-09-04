import { Cliente } from "../entities";
import { ClienteCreate, ClienteRead, ClienteReturn, ClienteUpdate } from "../interfaces";
import { clientReadSchema, clientReturnSchema } from "../schemas";
import { clientRepository } from "../repositories";

const create = async (payload: ClienteCreate): Promise<ClienteReturn> => {
  const Cliente: Cliente = clientRepository.create(payload);
  await clientRepository.save(Cliente);
  return clientReturnSchema.parse(Cliente);
};

const read = async (ClienteId: number): Promise<ClienteReturn> => {
  const Cliente = await clientRepository.findOne({
    where: { id: ClienteId },
  });
  return clientReturnSchema.parse(Cliente);
};

const update = async (payload: ClienteUpdate, id: number): Promise<ClienteReturn> => {
  const ClienteFound: Cliente | null = await clientRepository.findOne({
    where: { id: id },
  });

  const ClienteUpdated: Cliente = clientRepository.create({
    ...ClienteFound!,
    ...payload,
  });

  await clientRepository.save(ClienteUpdated);

  const Cliente = clientReturnSchema.parse(ClienteUpdated);

  return Cliente;
};

const destroy = async (Cliente: Cliente): Promise<void> => {
  await clientRepository.remove(Cliente);
};

export default { create, read, update, destroy};
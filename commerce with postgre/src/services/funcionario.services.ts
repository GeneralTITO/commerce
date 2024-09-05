import { Funcionario } from "../entities";
import { FuncionarioCreate, FuncionarioRead, FuncionarioReturn, FuncionarioUpdate } from "../interfaces";
import { funcionarioReturnSchema, funcionarioReadSchema } from "../schemas";
import { funcionarioRepository } from "../repositories";

const create = async (payload: FuncionarioCreate): Promise<FuncionarioReturn> => {
  const funcionario: Funcionario = funcionarioRepository.create(payload);
  await funcionarioRepository.save(funcionario);
  return funcionarioReturnSchema.parse(funcionario);
};

const read = async (funcionarioId: number): Promise<FuncionarioReturn> => {
  const funcionario = await funcionarioRepository.findOne({
    where: { id: funcionarioId },
  });
  return funcionarioReturnSchema.parse(funcionario);
};

const readAll = async (): Promise<FuncionarioRead> => {
  const funcionario = await funcionarioRepository.find({
    order:{id: "asc"}
  });
  return funcionarioReadSchema.parse(funcionario);
};

const update = async (payload: FuncionarioUpdate, id: number): Promise<FuncionarioReturn> => {
  const funcionarioFound: Funcionario | null = await funcionarioRepository.findOne({
    where: { id: id },
  });

  const funcionarioUpdated: Funcionario = funcionarioRepository.create({
    ...funcionarioFound!,
    ...payload,
  });

  await funcionarioRepository.save(funcionarioUpdated);

  const funcionario = funcionarioReturnSchema.parse(funcionarioUpdated);

  return funcionario;
};

const destroy = async (funcionario: Funcionario): Promise<void> => {
  await funcionarioRepository.remove(funcionario);
};

export default { create, read, update, destroy, readAll};
import { z } from "zod";
import { funcionarioCreateSchema, funcionarioReadSchema, funcionarioReturnSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Funcionario } from "../entities";

type FuncionarioCreate = z.infer<typeof funcionarioCreateSchema>;
type FuncionarioRead = z.infer<typeof funcionarioReadSchema>;
type FuncionarioReturn = z.infer<typeof funcionarioReturnSchema>;
type FuncionarioUpdate = DeepPartial<Funcionario>;

type FuncionarioRepo = Repository<Funcionario>;

export {
    FuncionarioCreate, FuncionarioRead, FuncionarioReturn, FuncionarioUpdate,
    FuncionarioRepo
};
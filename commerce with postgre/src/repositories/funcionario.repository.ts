import { Funcionario } from "../entities";
import { AppDataSource } from "../data-source";

export default AppDataSource.getRepository(Funcionario);
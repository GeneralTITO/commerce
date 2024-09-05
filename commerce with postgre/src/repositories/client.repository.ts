import { Cliente } from "../entities";
import { AppDataSource } from "../data-source";

export default AppDataSource.getRepository(Cliente);
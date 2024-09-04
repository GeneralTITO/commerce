import { ClienteExists } from "./cleinteExists.middleware";
import { FuncionarioExists } from "./funcionarioExists.middleware";
import { handleError } from "./handleError.middleware";
import { validateBody } from "./validadeBody.middleware";



export default { handleError, validateBody, ClienteExists, FuncionarioExists }
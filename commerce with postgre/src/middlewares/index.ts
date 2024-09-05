import { ClienteExists } from "./cleinteExists.middleware";
import { FuncionarioExists } from "./funcionarioExists.middleware";
import { handleError } from "./handleError.middleware";
import { ItensVendaExists } from "./itensvendaExists.middleware";
import { ProdutoExists } from "./produtoExists.middleware";
import { validateBody } from "./validadeBody.middleware";
import { VendaExists } from "./vendaExists.middleware";




export default { handleError, validateBody, ClienteExists, FuncionarioExists, ProdutoExists, ItensVendaExists, VendaExists }
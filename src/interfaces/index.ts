import {
    ClienteCreate, ClienteRead, ClienteReturn, ClienteUpdate,
    ClienteRepo
} from './cliente.interfaces';

import {
    FuncionarioCreate, FuncionarioRead, FuncionarioReturn, FuncionarioUpdate,
    FuncionarioRepo
} from './funcionario.interface';

import {
    ItensVendaCreate, ItensVendaRead, ItensVendaUpdate,
    ItensVendaRepo, ItensVendaReturn
} from './itensvenda.interface';

import {
    ProdutoCreate, ProdutoRead, ProdutoUpdate,
    ProdutoRepo, ProdutoReturn
} from './produto.interfaces';

import {
    VendaCreate, VendaRead, VendaUpdate,
    VendaRepo, VendaReturn
} from './venda.interfaces';

export {
    ClienteCreate, ClienteRead, ClienteReturn, ClienteUpdate, ClienteRepo,
    FuncionarioCreate, FuncionarioRead, FuncionarioReturn, FuncionarioUpdate, FuncionarioRepo,
    ItensVendaCreate, ItensVendaRead, ItensVendaUpdate, ItensVendaRepo,
    ProdutoCreate, ProdutoRead, ProdutoUpdate, ProdutoRepo,
    VendaCreate, VendaRead, VendaUpdate, VendaRepo, ProdutoReturn, VendaReturn, ItensVendaReturn
};
import {
    ClienteCreate, ClienteRead, ClienteReturn, ClienteUpdate,
    ClienteRepo
} from './cliente.interfaces';

import {
    FuncionarioCreate, FuncionarioRead, FuncionarioReturn, FuncionarioUpdate,
    FuncionarioRepo
} from './funcionario.interface';

import {
    ItensVendaCreate, ItensVendaRead,  ItensVendaUpdate,
    ItensVendaRepo
} from './itensvenda.interface';

import {
    ProdutoCreate, ProdutoRead, ProdutoUpdate,
    ProdutoRepo, ProdutoReturn
} from './produto.interfaces';

import {
    VendaCreate, VendaRead, VendaUpdate,
    VendaRepo
} from './venda.interfaces';

export {
    ClienteCreate, ClienteRead, ClienteReturn, ClienteUpdate, ClienteRepo,
    FuncionarioCreate, FuncionarioRead, FuncionarioReturn, FuncionarioUpdate, FuncionarioRepo,
    ItensVendaCreate, ItensVendaRead,  ItensVendaUpdate, ItensVendaRepo,
    ProdutoCreate, ProdutoRead, ProdutoUpdate, ProdutoRepo,
    VendaCreate, VendaRead, VendaUpdate, VendaRepo,ProdutoReturn
};
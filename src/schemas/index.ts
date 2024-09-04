import {
    clientSchema, clienteCreateSchema, clientUpdateSchema, clientReturnSchema, clientReadSchema
} from './Client.schemas';

import {
    funcionarioSchema, funcionarioCreateSchema, funcionarioUpdateSchema, funcionarioReturnSchema, funcionarioReadSchema
} from './funcionario.schemas';

import {
    itensVendaSchema, itensVendaCreateSchema, itensVendaUpdateSchema, itensVendaReturnSchema, itensVendaReadSchema
} from './itensvenda.schema';

import {
    produtoSchema, produtoCreateSchema, produtoUpdateSchema, produtoReturnSchema, produtoReadSchema
} from './produto.schemas';

import {
    vendaSchema, vendaCreateSchema, vendaUpdateSchema, vendaReturnSchema, vendaReadSchema
} from './venda.schemas';

export {
    clientReturnSchema, clientSchema, clienteCreateSchema, clientUpdateSchema, clientReadSchema,
    funcionarioSchema, funcionarioCreateSchema, funcionarioUpdateSchema, funcionarioReturnSchema, funcionarioReadSchema,
    itensVendaSchema, itensVendaCreateSchema, itensVendaUpdateSchema, itensVendaReturnSchema, itensVendaReadSchema,
    produtoSchema, produtoCreateSchema, produtoUpdateSchema, produtoReturnSchema, produtoReadSchema,
    vendaSchema, vendaCreateSchema, vendaUpdateSchema, vendaReturnSchema, vendaReadSchema
};

import {
    clientSchema, clienteCreateSchema, clientUpdateSchema, clientReturnSchema, clientReadSchema
} from './client.schemas';

import {
    funcionarioSchema, funcionarioCreateSchema, funcionarioUpdateSchema, funcionarioReturnSchema, funcionarioReadSchema
} from './funcionario.schemas';

import {
    itensVendaSchema, itensVendaCreateSchema, itensVendaUpdateSchema, itensVendaReadSchema
} from './itensvenda.schema';

import {
    produtoSchema, produtoCreateSchema, produtoUpdateSchema, produtoReadSchema
} from './produto.schemas';

import {
    vendaSchema, vendaCreateSchema, vendaUpdateSchema,  vendaReadSchema
} from './venda.schemas';

export {
    clientReturnSchema, clientSchema, clienteCreateSchema, clientUpdateSchema, clientReadSchema,
    funcionarioSchema, funcionarioCreateSchema, funcionarioUpdateSchema, funcionarioReturnSchema, funcionarioReadSchema,
    itensVendaSchema, itensVendaCreateSchema, itensVendaUpdateSchema, itensVendaReadSchema,
    produtoSchema, produtoCreateSchema, produtoUpdateSchema, produtoReadSchema,
    vendaSchema, vendaCreateSchema, vendaUpdateSchema,  vendaReadSchema
};

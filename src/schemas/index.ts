import {
    clientSchema, clienteCreateSchema, clientUpdateSchema, clientReturnSchema, clientReadSchema
} from './client.schemas';

import {
    funcionarioSchema, funcionarioCreateSchema, funcionarioUpdateSchema, funcionarioReturnSchema, funcionarioReadSchema
} from './funcionario.schemas';

import {
    itensVendaSchema, itensVendaCreateSchema, itensVendaUpdateSchema, itensVendaReadSchema, itensVendaReturnSchema
} from './itensvenda.schema';

import {
    produtoSchema, produtoCreateSchema, produtoUpdateSchema, produtoReadSchema, produtoReturnSchema
} from './produto.schemas';

import {
    vendaSchema, vendaCreateSchema, vendaUpdateSchema, vendaReadSchema, vendaReuturnSchema
} from './venda.schemas';

export {
    clientReturnSchema, clientSchema, clienteCreateSchema, clientUpdateSchema, clientReadSchema,
    funcionarioSchema, funcionarioCreateSchema, funcionarioUpdateSchema, funcionarioReturnSchema, funcionarioReadSchema,
    itensVendaSchema, itensVendaCreateSchema, itensVendaUpdateSchema, itensVendaReadSchema,
    produtoSchema, produtoCreateSchema, produtoUpdateSchema, produtoReadSchema,
    vendaSchema, vendaCreateSchema, vendaUpdateSchema, vendaReadSchema, produtoReturnSchema, vendaReuturnSchema, itensVendaReturnSchema
};

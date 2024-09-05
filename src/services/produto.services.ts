import { Produto } from "../entities";
import { ProdutoCreate, ProdutoRead, ProdutoReturn, ProdutoUpdate } from "../interfaces";
import { produtoReadSchema, produtoReturnSchema } from "../schemas";
import { produtoRepository } from "../repositories";

const create = async (payload: ProdutoCreate): Promise<ProdutoReturn> => {
    const Produto: Produto = produtoRepository.create(payload);
    await produtoRepository.save(Produto);
    return produtoReturnSchema.parse(Produto);
};

const read = async (ProdutoId: number): Promise<ProdutoReturn> => {
    const Produto = await produtoRepository.findOne({
        where: { id: ProdutoId },
    });
    console.log(Produto)
    if (Produto) {
        Produto.preco = parseFloat(Produto.preco as any);
    }
    const parsedProduto = produtoReturnSchema.parse(Produto);
    return parsedProduto
};

const readAll = async (): Promise<ProdutoRead> => {
    const produtos = await produtoRepository.find({
        order: { id: "ASC" }
    });


    const produtosComPrecoConvertido = produtos.map(produto => {
        if (produto.preco) {
            produto.preco = parseFloat(produto.preco as any);
        }
        return produtoReturnSchema.parse(produto);
    });

    return produtosComPrecoConvertido;
};

const update = async (payload: ProdutoUpdate, id: number): Promise<ProdutoReturn> => {
    const ProdutoFound: Produto | null = await produtoRepository.findOne({
        where: { id: id },
    });

    const ProdutoUpdated: Produto = produtoRepository.create({
        ...ProdutoFound!,
        ...payload,
    });


    ProdutoUpdated.preco = parseFloat(ProdutoUpdated.preco as any);


    await produtoRepository.save(ProdutoUpdated);

    const Produto = produtoReturnSchema.parse(ProdutoUpdated);

    return Produto;
};

const destroy = async (Produto: Produto): Promise<void> => {
    await produtoRepository.remove(Produto);
};

export default { create, read, update, destroy, readAll };
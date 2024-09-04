import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Venda } from './Venda';
import { Produto } from './Produto';

@Entity()
export class ItensVenda {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Venda, venda => venda.itensVendas)
  venda: Venda;

  @ManyToOne(() => Produto, produto => produto.itensVendas)
  produto: Produto;

  @Column()
  quantidade: number;

  @Column('decimal')
  precoTotal: number;
}
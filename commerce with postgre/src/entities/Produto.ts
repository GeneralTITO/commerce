import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ItensVenda } from './Itensvenda';


@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @Column()
  quantidadeEmEstoque: number;

  @OneToMany(() => ItensVenda, itensVenda => itensVenda.produto)
  itensVendas?: ItensVenda[];
}
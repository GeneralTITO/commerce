import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Venda } from './Venda';

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cargo: string;

  @Column()
  telefone: string;

  @OneToMany(() => Venda, venda => venda.funcionario)
  vendas: Venda[];
}
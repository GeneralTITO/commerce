import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Venda } from './Venda';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 150})
  nome: string;

  @Column({length: 50})
  cpf: string;

  @Column({length: 150})
  email: string;

  @Column({length: 1000})
  endereco: string;

  @Column({length: 50})
  telefone: string;

  @OneToMany(() => Venda, venda => venda.cliente)
  vendas: Venda[];
}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Cliente } from './Cliente';
import { Funcionario } from './Funcionario';
import { ItensVenda } from './Itensvenda';


@Entity()
export class Venda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  data: Date;

  @Column({
    type: 'enum',
    enum: ['Em Curso', 'Concluída'],
    default: 'Em Curso',
  })
  status: 'Em Curso' | 'Concluída';

  @ManyToOne(() => Cliente, cliente => cliente.vendas)
  cliente: Cliente;

  @ManyToOne(() => Funcionario, funcionario => funcionario.vendas)
  funcionario: Funcionario;

  @OneToMany(() => ItensVenda, itensVenda => itensVenda.venda)
  itensVendas: ItensVenda[];
}
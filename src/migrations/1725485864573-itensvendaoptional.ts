import { MigrationInterface, QueryRunner } from "typeorm";

export class Itensvendaoptional1725485864573 implements MigrationInterface {
    name = 'Itensvendaoptional1725485864573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "nome" character varying(150) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "cpf" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "email" character varying(150) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "endereco"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "endereco" character varying(1000) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "telefone" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "telefone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "endereco"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "endereco" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "cpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "nome" character varying NOT NULL`);
    }

}

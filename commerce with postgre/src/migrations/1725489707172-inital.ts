import { MigrationInterface, QueryRunner } from "typeorm";

export class Inital1725489707172 implements MigrationInterface {
    name = 'Inital1725489707172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cliente" ("id" SERIAL NOT NULL, "nome" character varying(150) NOT NULL, "cpf" character varying(50) NOT NULL, "email" character varying(150) NOT NULL, "endereco" character varying(1000) NOT NULL, "telefone" character varying(50) NOT NULL, CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "funcionario" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cargo" character varying NOT NULL, "telefone" character varying NOT NULL, CONSTRAINT "PK_2c5d0c275b4f652fd5cb381655f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "produto" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "preco" numeric(10,2) NOT NULL, "quantidadeEmEstoque" integer NOT NULL, CONSTRAINT "PK_99c4351f9168c50c0736e6a66be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "itens_venda" ("id" SERIAL NOT NULL, "quantidade" integer NOT NULL, "precoTotal" numeric NOT NULL, "vendaId" integer, "produtoId" integer, CONSTRAINT "PK_724724a6fe4c83c27efd160164f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."venda_status_enum" AS ENUM('Em Curso', 'Concluída')`);
        await queryRunner.query(`CREATE TABLE "venda" ("id" SERIAL NOT NULL, "data" date NOT NULL, "status" "public"."venda_status_enum" NOT NULL DEFAULT 'Em Curso', "clienteId" integer, "funcionarioId" integer, CONSTRAINT "PK_e54dc36860bef073e9ab638b444" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "itens_venda" ADD CONSTRAINT "FK_0cd8254f235ecebb82255e5c288" FOREIGN KEY ("vendaId") REFERENCES "venda"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itens_venda" ADD CONSTRAINT "FK_a6fe7221f1c0665517635d92dbd" FOREIGN KEY ("produtoId") REFERENCES "produto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "venda" ADD CONSTRAINT "FK_15b70438372ffad25249a2c6fec" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "venda" ADD CONSTRAINT "FK_b6bb77e5e19871f5aa0cb569f49" FOREIGN KEY ("funcionarioId") REFERENCES "funcionario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "venda" DROP CONSTRAINT "FK_b6bb77e5e19871f5aa0cb569f49"`);
        await queryRunner.query(`ALTER TABLE "venda" DROP CONSTRAINT "FK_15b70438372ffad25249a2c6fec"`);
        await queryRunner.query(`ALTER TABLE "itens_venda" DROP CONSTRAINT "FK_a6fe7221f1c0665517635d92dbd"`);
        await queryRunner.query(`ALTER TABLE "itens_venda" DROP CONSTRAINT "FK_0cd8254f235ecebb82255e5c288"`);
        await queryRunner.query(`DROP TABLE "venda"`);
        await queryRunner.query(`DROP TYPE "public"."venda_status_enum"`);
        await queryRunner.query(`DROP TABLE "itens_venda"`);
        await queryRunner.query(`DROP TABLE "produto"`);
        await queryRunner.query(`DROP TABLE "funcionario"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
    }

}

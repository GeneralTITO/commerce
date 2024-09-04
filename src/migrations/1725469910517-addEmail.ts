import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmail1725469910517 implements MigrationInterface {
    name = 'AddEmail1725469910517'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "email"`);
    }

}

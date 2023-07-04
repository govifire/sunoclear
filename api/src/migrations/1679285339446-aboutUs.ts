import { MigrationInterface, QueryRunner } from "typeorm";

export class aboutUs1679285339446 implements MigrationInterface {
    name = 'aboutUs1679285339446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "about_us" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "aboutUs" character varying NOT NULL, CONSTRAINT "PK_f9643a00dea811eecf941ab4fdc" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "about_us"`);
    }

}

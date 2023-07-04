import { MigrationInterface, QueryRunner } from "typeorm";

export class freeHearingAidTrial1682673182161 implements MigrationInterface {
    name = 'freeHearingAidTrial1682673182161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "free_hearing_aid_trial" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "email" character varying, "mobileNumber" character varying NOT NULL, "userProblem" character varying, CONSTRAINT "PK_a7488db06020bf0ee68da886b3f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "free_hearing_aid_trial"`);
    }

}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Items1725627526555 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
          name: "items",
          columns: [
              {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
              },
              {
                  name: "name",
                  type: "string",
              },
              {
                  name: "public",
                  type: "boolean",
              },
          ],
      }),
      true,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}

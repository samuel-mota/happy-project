import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1603041189507 implements MigrationInterface {

	// realiza alterações
	// cria tabelas, cria um campo, deleta um campo
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "orphanages",
			columns: [
				{
					name: "id",
					type: "integer",
					unsigned: true,
					isPrimary: true,
					isGenerated: true,
					generationStrategy: "increment",
				},
				{
					name: "name",
					type: "varchar"
				},
				{
					name: "latitude",
					type: "decimal",
					scale: 10,
					precision: 2,
				},
				{
					name: "longitude",
					type: "decimal",
					scale: 10,
					precision: 2,
				},
				{
					name: "about",
					type: "text",
				},
				{
					name: "instructions",
					type: "text",
				},
				{
					name: "opening_hours",
					type: "varchar"
				},
				{
					name: "open_on_weekends",
					type: "boolean",
					default: false,
				}
			],
		}))
	}

	// desfaz tudo que foi feito no método UP
	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("orphanages");
	}
}
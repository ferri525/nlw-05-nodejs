import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1619301489596 implements MigrationInterface {

    //Quando da migration:run, ele vai rodar tudo o que esta dentro do up.
    public async up(queryRunner: QueryRunner): Promise<void> {  
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true 
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
            })
        );
    }

    //Reverter algum erro da migration.
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings");
    }

}

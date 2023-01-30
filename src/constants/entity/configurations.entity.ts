import { UUIDV4 } from 'sequelize';
import { UUID } from 'sequelize';
import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';


@Table
export class Configurations extends Model {

    @PrimaryKey
    @Column({
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    code_config: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description_config: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    value_config: string;

    @Column({
        type: DataType.ENUM,
        values: ['nombre', 'valeur', 'date', 'boolean'], 
        defaultValue: 'valeur',
    })
    type_config: string;
}
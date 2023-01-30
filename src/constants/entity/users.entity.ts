import { UUIDV4 } from 'sequelize';
import { UUID } from 'sequelize';
import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';


@Table
export class Users extends Model {

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
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    }) 
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    code_ste: string;

    @Column({
        type: DataType.ENUM,
        values: ['admin', 'client'],
        defaultValue: 'client',
    })
    type: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0
    })
    state: number;
}
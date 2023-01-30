import { UUIDV4 } from 'sequelize';
import { UUID } from 'sequelize';
import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';


@Table
export class Societes extends Model {

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
    code_ste: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    designation: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    }) 
    tel: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    adresse: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0
    })
    state: number;
}
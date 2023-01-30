import { UUIDV4 } from 'sequelize';
import { UUID } from 'sequelize';
import { Table, Column, Model, DataType, PrimaryKey, AllowNull } from 'sequelize-typescript';


@Table
export class Members extends Model {

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
    num_smim: string;

    @Column({ 
        type: DataType.STRING,
        allowNull: false,
    }) 
    nom_prenoms: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: true,
    })
    cin: string;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    dt_emb: Date;

    @AllowNull
    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    dt_dep: Date; 

    @Column({
        type: DataType.DATE, 
        allowNull: false,
    })
    dt_nais: Date;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: true,
    })
    cnaps: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    code_ste: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    fonction: string;

    @Column({
        type: DataType.ENUM, 
        values: ['homme', 'femme'], 
        allowNull: false,
    })
    sexe: string;

    @Column({
        type: DataType.ENUM,
        values: ['s', 'c', 'e'],
        allowNull: false, 
    })
    type: string;

    @Column({
        type: DataType.STRING,
        defaultValue: 0,
        allowNull: true,
    })
    tel: true;

    @Column({
        type: DataType.STRING, 
        allowNull: true,
    }) 
    adresse: string;

    @Column({
        type: DataType.STRING, 
        allowNull: true,
    })
    email: string;

    @Column({
        type: DataType.STRING, 
        allowNull: false,
    })
    num_parent: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 3
    })
    state: number;
}
import { UUIDV4 } from 'sequelize';
import { UUID } from 'sequelize';
import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';


@Table
export class Declarations extends Model {

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
    nom_prenoms: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    cin: string;

    @Column({
        type: DataType.DECIMAL(8, 2),
        allowNull: false
    }) 
    brut: number;

    @Column({
        type: DataType.DECIMAL(8, 2),
        allowNull: false
    }) 
    trav: number;

    @Column({
        type: DataType.DECIMAL(8, 2),
        allowNull: false 
    }) 
    emp: number;

    @Column({
        type: DataType.DECIMAL(8, 2),
        allowNull: false 
    }) 
    charge_salariale: number;

    @Column({
        type: DataType.DECIMAL(8, 2),
        allowNull: false 
    }) 
    charge_patronale: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    }) 
    population: number;

    @Column({
        type: DataType.DECIMAL(8, 2),
        allowNull: false
    }) 
    plafonnement: number;

    @Column({ 
        type: DataType.DECIMAL(8, 2),
        allowNull: false
    }) 
    montant_payer: number;

    @Column({
        type: DataType.STRING,
        allowNull: true
    }) 
    ref_paiement: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    periode: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    user_valid: string;
    

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    isValid: boolean;
}
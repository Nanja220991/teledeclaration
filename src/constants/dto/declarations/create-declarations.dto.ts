import { isNotEmpty, IsNotEmpty } from "@nestjs/class-validator";

export class CreateDeclarationsDto {

    @IsNotEmpty()
    code_ste: string;

    @IsNotEmpty()
    nom_prenoms: string;

    @IsNotEmpty()
    cin: string;

    @IsNotEmpty()
    brut: number;

    @IsNotEmpty()
    trav: number;

    @IsNotEmpty() 
    emp: number;

    @IsNotEmpty() 
    population: number;

    @IsNotEmpty() 
    plafonnement: number;

    @IsNotEmpty()
    user_valid: string;
    

    @IsNotEmpty()
    isValid: boolean;
}
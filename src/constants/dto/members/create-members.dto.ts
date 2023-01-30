import { IsNotEmpty } from "@nestjs/class-validator";

export class CreateMembersDto {

    @IsNotEmpty()
    num_smim: string;

    @IsNotEmpty()
    nom_prenoms: string;

    @IsNotEmpty()
    cin: string;

    @IsNotEmpty()
    dt_emb: Date;

    @IsNotEmpty()
    dt_dep: Date;

    @IsNotEmpty()
    dt_nais: Date; 

    @IsNotEmpty()
    cnaps: string;

    @IsNotEmpty()
    code_ste: string;

    @IsNotEmpty()
    fonction: string;

    @IsNotEmpty()
    sexe: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    state: number;
}
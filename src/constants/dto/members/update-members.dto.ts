import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateMembersDto } from './create-members.dto';

export class UpdateMembersDto extends PartialType(CreateMembersDto) {
   
    @IsOptional()
    num_smim: string;

    @IsOptional()
    nom_prenoms: string;

    @IsOptional()
    cin: string;

    @IsOptional()
    dt_emb: Date;

    @IsOptional()
    dt_dep: Date;

    @IsOptional()
    dt_nais: Date;

    @IsOptional()
    cnaps: string;

    @IsOptional()
    code_ste: string;

    @IsOptional()
    fonction: string;

    @IsOptional()
    sexe: string;

    @IsOptional()
    type: string;

    @IsOptional()
    state: number;
}

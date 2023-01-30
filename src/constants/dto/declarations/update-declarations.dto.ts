import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateDeclarationsDto } from './create-declarations.dto';

export class UpdateDeclarationsDto extends PartialType(CreateDeclarationsDto) {
   
    @IsOptional()
    code_ste: string;

    @IsOptional()
    nom_prenoms: string;
 
    @IsOptional() 
    cin: string;

    @IsOptional()
    brut: number;

    @IsOptional()
    trav: number;

    @IsOptional() 
    emp: number;

    @IsOptional() 
    population: number;

    @IsOptional() 
    plafonnement: number;

    @IsOptional()
    user_valid: string;
    

    @IsOptional()
    isValid: boolean;
}

import { IsNotEmpty, IsOptional } from "@nestjs/class-validator";

export class UpdateSocietesDto {

    @IsOptional()
    code_ste: string;

    @IsOptional()
    designation: string;

    @IsOptional()
    tel: string;

    @IsOptional()
    email: string;

    @IsOptional()
    adresse: string;

    @IsOptional()
    state: number;
}
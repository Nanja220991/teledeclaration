import { IsNotEmpty } from "@nestjs/class-validator";

export class CreateSocietesDto {

    @IsNotEmpty()
    code_ste: string;

    @IsNotEmpty()
    designation: string;

    @IsNotEmpty()
    tel: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    adresse: string;
}
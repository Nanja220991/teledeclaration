import { IsNotEmpty, IsOptional } from "@nestjs/class-validator";

export class UpdateUsersDto {

    @IsOptional()
    username: string;

    @IsOptional()
    email: string;

    @IsOptional()
    password: string;

    @IsOptional()
    code_ste: string;

    @IsOptional()
    type: string;

    @IsOptional()
    state: number;
}
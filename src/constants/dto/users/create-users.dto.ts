import { IsNotEmpty } from "@nestjs/class-validator";

export class CreateUsersDto {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    code_ste: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    state: number;
}
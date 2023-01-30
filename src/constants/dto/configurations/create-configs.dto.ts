import { IsNotEmpty } from "@nestjs/class-validator";

export class CreateConfigsDto {

    @IsNotEmpty()
    code_config: string;

    @IsNotEmpty()
    description_config: string;

    @IsNotEmpty()
    value_config: string;

    @IsNotEmpty()
    type_config: string;
}
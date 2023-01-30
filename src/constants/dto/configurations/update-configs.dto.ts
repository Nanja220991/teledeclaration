import { IsOptional } from "@nestjs/class-validator";

export class UpdateConfigsDto {

    @IsOptional()
    code_config: string;

    @IsOptional()
    description_config: string;

    @IsOptional()
    value_config: string;

    @IsOptional()
    type_config: string; 
}
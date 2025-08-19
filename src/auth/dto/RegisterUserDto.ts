import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { IsUUID } from "class-validator";

export class RegisterUserDto {
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    Code: string;

    @IsNotEmpty()
    @IsString()
    Username: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    Email: string;

    @IsNotEmpty()
    @IsString()
    Password: string;

    @IsOptional()
    @IsString()
    FirstName?: string;

    @IsOptional()
    @IsString()
    LastName?: string;
}
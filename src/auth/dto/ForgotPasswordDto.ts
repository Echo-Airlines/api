import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ForgotPasswordDto {
    @IsEmail()
    @IsNotEmpty()
    Email: string;
}
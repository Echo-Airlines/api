import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class IsMemberGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}

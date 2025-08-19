// is-admin.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class IsMemberGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user: any = request.user;

    let isMember = false;

    if (user && (user.Roles.includes('member') || user.Roles.includes('admin'))) {
      isMember = true;
    }

    return isMember;
  }
}

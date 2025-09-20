// is-admin.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class IsManagerGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user: any = request.user;

    let isManager = false;

    if (user && (user.Roles.includes('manager') || user.Roles.includes('admin'))) {
      isManager = true;
    }

    return isManager;
  }
}

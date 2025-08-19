// is-admin.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UserProfileDto } from '@user/dto/UserProfile.dto';

@Injectable()
export class IsAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user: any = request.user;

    let isAdmin = false;

    if (user && user.Roles.includes('admin')) {
      isAdmin = true;
    }

    return isAdmin;
  }
}

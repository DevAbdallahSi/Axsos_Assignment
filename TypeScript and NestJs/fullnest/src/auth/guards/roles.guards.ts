import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../enums/role.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredRoles) {
            return true; // If no roles are defined, allow access
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        return matchRoles(requiredRoles, user?.role);
    }
}
function matchRoles(requiredRoles: string[], userRoles: string[]) {
    return requiredRoles.some((role: string) => userRoles?.includes(role));
}
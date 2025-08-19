import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const required = this.reflector.getAllAndOverride<Role[]>(
            ROLES_KEY,
            [context.getHandler(), context.getClass()],
        );
        if (!required || required.length === 0) return true;

        const { user } = context.switchToHttp().getRequest();
        // user might be undefined if no AuthGuard ran
        const userRoles: string[] | undefined = user?.roles;
        if (!userRoles) return false;

        // allow if at least one role matches
        return required.some((r) => userRoles.includes(r));
    }
}

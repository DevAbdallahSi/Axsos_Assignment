import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get('count')
    async count() {
        const total = await this.usersService.countUsers();
        return { total };
    }
}

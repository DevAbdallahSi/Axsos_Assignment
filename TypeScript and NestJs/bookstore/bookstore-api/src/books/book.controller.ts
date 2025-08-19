import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { BooksService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';

@Controller('books')
export class BooksController {
    constructor(private readonly books: BooksService) { }

    @Get()
    list(@Query('page') page?: number, @Query('limit') limit?: number, @Query('q') q?: string) {
        return this.books.findAll({ page: Number(page), limit: Number(limit), q });
    }

    @Get(':id')
    get(@Param('id') id: string) {
        return this.books.findById(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body() dto: CreateBookDto, @Req() req: any) {
        return this.books.create(dto, req.user.id ?? req.user._id?.toString());
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateBookDto, @Req() req: any) {
        return this.books.update(id, dto, req.user.id ?? req.user._id?.toString());
    }

    // Example: only Admin/Moderator can delete (ignores owner check)
    // If you prefer "owner only", keep your service's owner check and just require AuthGuard here.
    // @UseGuards(AuthGuard('jwt'), RolesGuard)
    // @Roles(Role.Admin, Role.Moderator)
    // @Delete(':id')
    // delete(@Param('id') id: string) {
    //     // or call a service method that skips owner check for admins
    //     return this.books.remove(id, undefined as unknown as string); // example; adapt to your logic
    // }
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    delete(@Param('id') id: string, @Req() req: any) {
        return this.books.remove(id, req.user.id ?? req.user._id?.toString());
    }
}

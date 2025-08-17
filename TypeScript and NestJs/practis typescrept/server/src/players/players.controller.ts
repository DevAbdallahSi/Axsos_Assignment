import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player } from './schemas/player.schema';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  create(@Body() data: Player) {
    return this.playersService.create(data);
  }

  @Get()
  findAll() {
    return this.playersService.findAll();
  }
}

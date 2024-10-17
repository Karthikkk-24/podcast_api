import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { EpisodesService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {
  constructor(private episodesService: EpisodesService) {}

  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    return 'all episodes';
  }

  @Get('featured')
  findFeatured() {
    return 'featured episodes';
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return 'one episode';
  }

  @Post()
  create(@Body() input: CreateEpisodeDto) {
    return this.episodesService.create(input);
  }
}

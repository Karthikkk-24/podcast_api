import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { EpisodesService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {
  constructor(
    private episodesService: EpisodesService,
    private configService: ConfigService,
  ) {}

  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    return this.episodesService.findAll();
  }

  @Get('featured')
  findFeatured() {
    return this.episodesService.findFeatured();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.episodesService.findOne(id);
  }

  @Post()
  create(@Body() input: CreateEpisodeDto) {
    return this.episodesService.create(input);
  }
}

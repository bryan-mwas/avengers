import { Body, Controller, Get, Post } from '@nestjs/common';
import { AvengersService } from './avengers.service';
import { AvengerDto } from './dto/avenger.dto';
import { Avenger } from './schema/avenger.schema';
@Controller('avengers')
export class AvengersController {
  constructor(private readonly avengersService: AvengersService) {}

  @Post()
  async create(@Body() avengerDto: AvengerDto) {
    try {
      const result = await this.avengersService.create(avengerDto);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  @Get()
  async findAll(): Promise<Avenger[]> {
    return this.avengersService.findAll();
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AvengersController } from './avengers.controller';
import { AvengersResolver } from './avengers.resolver';
import { AvengersService } from './avengers.service';
import { Avenger, AvengerSchema } from './schema/avenger.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Avenger.name, schema: AvengerSchema }]),
  ],
  controllers: [AvengersController],
  providers: [AvengersService, AvengersResolver],
})
export class AvengersModule {}

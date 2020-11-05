import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { AvengersService } from './avengers.service';
import { AvengerDto } from './dto/avenger.dto';
import { Avenger } from './schema/avenger.schema';

@Resolver('Avenger')
export class AvengersResolver {
  constructor(private readonly avengersService: AvengersService) {}

  @Query()
  async getAvengers(): Promise<Avenger[]> {
    return this.avengersService.findAll();
  }

  @Query()
  async avenger(@Args('id') id: string): Promise<Avenger> {
    return this.avengersService.findOne(id);
  }

  @Mutation()
  async createAvenger(@Args('input') args: AvengerDto): Promise<Avenger> {
    try {
      const createdAvenger = await this.avengersService.create(args);
      return createdAvenger;
    } catch (error) {
      console.error(error);
    }
  }

  @ResolveField()
  createdAt(@Parent() avenger) {
    console.log(avenger);
    const { _id } = avenger;
    return _id.getTimestamp().toString();
  }
}

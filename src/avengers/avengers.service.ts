import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AvengerDto } from './dto/avenger.dto';
import { Avenger } from './schema/avenger.schema';

export class AvengersService {
  constructor(
    @InjectModel(Avenger.name) private readonly avengerModel: Model<Avenger>,
  ) {}

  async create(avengerDto: AvengerDto): Promise<Avenger> {
    return this.avengerModel.create(avengerDto);
  }

  async findAll(): Promise<Avenger[]> {
    return this.avengerModel.find().exec();
  }

  async findOne(id: string): Promise<Avenger> {
    return this.avengerModel.findOne({ _id: id }).exec();
  }
}

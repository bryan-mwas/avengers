import { Min } from 'class-validator';

export class AvengerDto {
  readonly name: string;
  @Min(1)
  readonly age: number;
  readonly universe: string;
}

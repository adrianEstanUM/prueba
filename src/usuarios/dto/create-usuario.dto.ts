import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  name: string;

  @Type(() => Date)
  @IsDate()
  fechaNacimiento: Date;

  constructor(name: string, fechaNacimiento: Date) {
    this.name = name;
    this.fechaNacimiento = fechaNacimiento;
  }
}

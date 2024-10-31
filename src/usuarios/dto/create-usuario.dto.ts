import { IsDate, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  name: string;
  @IsDate()
  fechaNacimiento: Date;

  constructor(name: string, fechaNacimiento: Date) {
    this.name = name;
    this.fechaNacimiento = fechaNacimiento;
  }
}

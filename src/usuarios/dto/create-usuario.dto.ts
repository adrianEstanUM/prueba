export class CreateUsuarioDto {
  name: string;
  fechaNacimiento: Date;

  constructor(name: string, fechaNacimiento: Date) {
    this.name = name;
    this.fechaNacimiento = fechaNacimiento;
  }
}

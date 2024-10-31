import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class Usuario {
  id: number;
  name: string;
  fechaNacimiento: Date;

  constructor(name: string, fechaNacimiento: Date) {
    this.name = name;
    this.fechaNacimiento = fechaNacimiento;
  }

  getEdad(): number {
    let hoy = new Date();
    return hoy.getFullYear() - this.fechaNacimiento.getFullYear();
  }
}

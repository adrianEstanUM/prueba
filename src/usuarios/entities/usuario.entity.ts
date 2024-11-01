import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  fechaNacimiento: Date;

  constructor(name: string, fechaNacimiento: Date) {
    this.name = name;
    this.fechaNacimiento = fechaNacimiento;
  }
}

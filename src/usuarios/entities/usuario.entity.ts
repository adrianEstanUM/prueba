export class Usuario {
  id: number;
  name: string;
  fechaNacimiento: Date;

  getEdad(): number {
    let hoy = new Date();
    return hoy.getFullYear() - this.fechaNacimiento.getFullYear();
  }
}

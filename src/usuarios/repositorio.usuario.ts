import { Repositorio } from 'src/core/repositorio';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export abstract class RepositorioUsuario extends Repositorio<Usuario> {}

export class RepositorioUsuarioTypeORM extends RepositorioUsuario {
  constructor(
    @InjectRepository(Usuario)
    private repositorioUsuarios: Repository<Usuario>,
  ) {
    super();
  }

  listar(): Promise<Usuario[]> {
    return this.repositorioUsuarios.find();
  }
  crear(item: Usuario): void {
    this.repositorioUsuarios.save(item);
  }
  actualizar(item: Usuario): void {
    this.repositorioUsuarios.update(item.id, item);
  }
  eliminar(id: number): void {
    this.repositorioUsuarios.delete(id);
  }
  obtener(id: number): Promise<Usuario> {
    return this.repositorioUsuarios.findOneBy({ id });
  }
}

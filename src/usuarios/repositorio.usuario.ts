import { Repositorio } from 'src/core/repositorio';
import * as Domain from './domain';
import * as Persistance from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserMapper } from './usuarioMapper';

export abstract class RepositorioUsuario extends Repositorio<Persistance.Usuario> {}

export class RepositorioUsuarioTypeORM extends RepositorioUsuario {
  constructor(
    @InjectRepository(Persistance.Usuario)
    private repositorioUsuarios: Repository<Persistance.Usuario>,
  ) {
    super();
  }

  listar(): Promise<Domain.Usuario[]> {
    return this.repositorioUsuarios
      .find()
      .then((users) => users.map(UserMapper.toDomain));
  }
  crear(item: Domain.Usuario): void {
    this.repositorioUsuarios.save(UserMapper.toPersistance(item));
  }
  actualizar(item: Domain.Usuario): void {
    this.repositorioUsuarios.update(item.id, UserMapper.toPersistance(item));
  }
  eliminar(id: number): void {
    this.repositorioUsuarios.delete(id);
  }
  obtener(id: number): Promise<Domain.Usuario> {
    return this.repositorioUsuarios
      .findOneBy({ id })
      .then((user) => UserMapper.toDomain(user));
  }
}

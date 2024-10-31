import * as Domain from './domain';
import * as Persistance from './entities';

export class UserMapper {
  static toDomain(usuario: Persistance.Usuario): Domain.Usuario {
    return new Domain.Usuario(usuario.name, usuario.fechaNacimiento);
  }

  static toPersistance(usuario: Domain.Usuario): Persistance.Usuario {
    return new Persistance.Usuario(usuario.name, usuario.fechaNacimiento);
  }
}

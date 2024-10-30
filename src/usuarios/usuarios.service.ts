import { Injectable } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { RepositorioUsuario } from './repositorio.usuario';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(private repositorioUsuario: RepositorioUsuario) {}

  create(usuario: Usuario) {
    this.repositorioUsuario.crear(usuario);
  }

  findAll() {
    return this.repositorioUsuario.listar();
  }

  findOne(id: number) {
    return this.repositorioUsuario.obtener(id);
  }

  update(usuario: Usuario) {
    this.repositorioUsuario.actualizar(usuario);
  }

  remove(id: number) {
    return this.repositorioUsuario.eliminar(id);
  }
}

import { Injectable } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { RepositorioUsuario } from './repositorio.usuario';
import { Usuario } from './domain/usuario.domain';

@Injectable()
export class UsuariosService {
  constructor(private repositorioUsuario: RepositorioUsuario) {}

  create(name: string, fechaNacimiento: Date) {
    let usuario = new Usuario(name, fechaNacimiento);
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

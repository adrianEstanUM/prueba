import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import {
  RepositorioUsuario,
  RepositorioUsuarioTypeORM,
} from './repositorio.usuario';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuariosController],
  providers: [
    UsuariosService,
    {
      provide: RepositorioUsuario,
      useClass: RepositorioUsuarioTypeORM,
    },
  ],
})
export class UsuariosModule {}

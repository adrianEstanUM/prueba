import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entities/usuario.entity';

@Module({
  imports: [
    UsuariosModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      synchronize: true,
      logging: false,
      // entities: [User,Photo,PhotoMetadata,Author,Album],
      autoLoadEntities: true, // carga directamente las entidades de detecta con @Entity
      migrations: [],
      subscribers: [],
    }),
    TypeOrmModule.forFeature([Usuario]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

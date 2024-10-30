import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Método que devuelve un saludo
  getHello(): string {
    return 'Hello World!';
  }
}

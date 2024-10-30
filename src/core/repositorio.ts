export abstract class Repositorio<T> {
  abstract listar(): Promise<T[]>;
  abstract crear(item: T): void;
  abstract actualizar(item: T): void;
  abstract eliminar(id: number): void;
  abstract obtener(id: number): Promise<T>;
}

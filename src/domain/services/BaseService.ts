export interface BaseService<T, R> {
  execute(type: T): Promise<R>;
}

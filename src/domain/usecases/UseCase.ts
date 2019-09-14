export interface UseCase<T, R> {
  execute(type: T): Promise<R>;
}

export interface IGenericHttpClient {
  baseUrl: string;
  get: <T, P extends Object>(path: string, query: P) => Promise<T>;
  post: <T, P extends Object, B extends Object>(
    path: string,
    query: P,
    body: B
  ) => Promise<T>;
}

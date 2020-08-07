export default interface SchemaRes<T> {
  code: number;
  status: number;
  data: T;
}

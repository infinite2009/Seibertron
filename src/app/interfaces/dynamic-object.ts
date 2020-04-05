export default interface DynamicObject {
  [key: string]: string | number | DynamicObject | (string | number | DynamicObject)[];
  [index: number]: string | number | DynamicObject | (string | number | DynamicObject)[];
}

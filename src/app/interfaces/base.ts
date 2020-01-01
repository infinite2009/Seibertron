export interface SelectOption {
  id: string;
  name: string;
}

export interface Dictionary<T> {
  [key: string]: T;
}

export interface ComponentProtoType {
  data: any;
}

export interface FreeObject<T = any> {
  [key: string]: T;
  [index: number]: T;
}

export interface ComponentProperties {
  styles: FreeObject;
  data: FreeObject;
  events: FreeObject<(e) => void>;
}

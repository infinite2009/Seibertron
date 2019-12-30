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

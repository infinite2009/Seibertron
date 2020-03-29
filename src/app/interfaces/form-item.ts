export interface IFormItemOptions<T> {
  value?: T;
  checked?: boolean;
  key?: string;
  label?: string;
  required?: boolean;
  order?: number;
  controlType?: string;
  type?: string;
  options?: {
    key: string;
    value: string;
  }[];
}

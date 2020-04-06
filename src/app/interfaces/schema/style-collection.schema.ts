import { StyleSchema } from '@/interfaces/schema/style.schema';

export interface StyleCollectionSchema {
  [key: string]: StyleSchema<number | string>;
}

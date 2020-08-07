import StyleSchema from '@/interfaces/schema/style.schema';

export default interface StyleCollectionSchema {
  [key: string]: StyleSchema<number | string>;
}

import StateSchema from '@/interfaces/schema/state-schema';

export default interface StateCollectionSchema {
  [key: string]: StateSchema;
}

import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';

export default interface MatrixViewSchema extends AbstractWidgetSchema {
  columns: {
    [key: string]: {
      // 当前列的 cell 的 widget 或者 component 的名字
      type: string;
    }
  };
}

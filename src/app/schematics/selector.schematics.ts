import ComponentSchema from '../interfaces/component.schematics';
import Layout from '../enum/layout';
import Positioning from '../enum/positioning';

const selectorSchematics: ComponentSchema = {
  name: 'selector',
  label: '选择器',
  type: 'component',
  state: {},
  props: {
    data: [
      {
        id: 1,
        name: '样例1',
      },
      {
        id: 2,
        name: '样例2',
      }
    ]
  },
  structure: {
    layout: Layout.column,
    children: [
      {
        type: 'widget',
        structure: {
          layout: Layout.column,
        }
      },
      {
        type: 'widget',
        structure: {
          layout: Layout.column,
          position: Positioning.absolute,

        }
      }
    ]
  },
  styles: {

  },
};

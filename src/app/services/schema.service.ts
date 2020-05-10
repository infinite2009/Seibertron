import WidgetType from '@/enum/schema/widget-type.enum';
import { ComponentSchema } from '@/interfaces/schema/component.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import WidgetFamilySchema from '@/types/widget-family-schema';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SchemaService {
  constructor() {}

  /*
   * 把 schema 转换为 控件树
   */
  convertSchemaToTree(schema: WidgetFamilySchema) {
    if (!schema) {
      return null;
    }
    const initialNode: WidgetTreeNode = {
      key: null,
      type: null,
      title: null,
      expanded: false,
      selected: false,
      schema: null,
    };
    const result: WidgetTreeNode = {
      ...initialNode,
    };
    let schemaQueue = [schema];
    let treeSchema = [result];
    while (schemaQueue.length) {
      const currentSchema = schemaQueue[0];
      const currentNode = treeSchema[0];
      // 为了维持 currentNode 的引用，只能一个一个地赋值，用数组加循环压缩语句比较罗嗦，懒得那么写了
      currentNode.key = currentSchema.id;
      currentNode.type = currentSchema.type;
      currentNode.title = currentSchema.name;
      if ('children' in currentSchema && this.canHaveChildren(currentSchema.type)) {
        currentNode.children = [];
        currentNode.expanded = true;
        for (let i = 0, l = currentSchema.children.length; i < l; i++) {
          currentNode.children.push({ ...initialNode });
        }
        schemaQueue = schemaQueue.concat(currentSchema.children);
        treeSchema = treeSchema.concat(currentNode.children);
      }
      if (!this.canHaveChildren(currentSchema.type)) {
        currentNode.isLeaf = true;
      }
      currentNode.schema = { ...currentSchema };
      if ('children' in currentNode.schema) {
        delete currentNode.schema.children;
      }
      schemaQueue.shift();
      treeSchema.shift();
    }
    // 默认选中根节点
    result.selected = true;
    return result;
  }

  /*
   * 把 schema 保存到 localStorage
   */
  saveSchemaToLocalStorage(schema: WidgetFamilySchema) {
    window.localStorage.setItem('schema', JSON.stringify(schema));
  }

  /*
   * 把控件树转换为 schema
   * 里边有浅拷贝，可能有修改风险
   */
  convertTreeToSchema(treeNode: WidgetTreeNode) {
    const initialSchema: WidgetFamilySchema = {
      id: null,
      name: null,
      type: null,
      desc: '',
      children: [],
    };
    const result = {
      ...initialSchema,
    };
    let treeNodeQueue = [treeNode];
    let schemaQueue: WidgetFamilySchema[] = [result];
    while (treeNodeQueue.length) {
      const currentNode = treeNodeQueue[0];
      const currentSchema = schemaQueue[0];

      Object.entries(currentNode.schema).forEach(([key, val]) => {
        currentSchema[key] = val;
      });

      if (this.canHaveChildren(currentNode.schema.type)) {
        if ('children' in currentSchema) {
          currentSchema.children = [];
        }
        for (let i = 0, l = currentNode.children.length; i < l; i++) {
          if ('children' in currentSchema) {
            currentSchema.children.push({ ...initialSchema });
          }
        }
        treeNodeQueue = treeNodeQueue.concat(currentNode.children);
        if ('children' in currentSchema) {
          schemaQueue = schemaQueue.concat(currentSchema.children);
        }
      } else {
        if ('children' in currentSchema) {
          delete currentSchema.children;
        }
      }
      treeNodeQueue.shift();
      schemaQueue.shift();
    }
    return JSON.parse(JSON.stringify(result));
  }

  canHaveChildren(widgetType: WidgetType | string) {
    const list: (WidgetType | string)[] = [
      WidgetType.container,
      WidgetType.list,
      WidgetType.table,
      WidgetType.form,
      WidgetType.tree
    ];
    return list.includes(widgetType);
  }

  canRepeatChildren(widgetType: WidgetType | string) {
    const list: (WidgetType | string)[] = [
      WidgetType.tree,
      WidgetType.table,
      WidgetType.list,
    ];
    return list.includes(widgetType);
  }

  async fetchComponentSchema() {
    interface SchemaRes {
      code: number;
      status: number;
      data: ComponentSchema;
    }
    return new Promise<SchemaRes>((resolve) => {
      resolve({
        code: 0,
        status: 200,
        data: JSON.parse(window.localStorage.getItem('schema')),
      });
    });
  }
}

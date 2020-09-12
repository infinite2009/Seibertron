import Positioning from '@/enum/schema/positioning.enum';
import StateOperator from '@/enum/schema/state-operator.enum';
import InsertType from '@/enum/schema/widget-type.enum';
import ComponentSchema from '@/interfaces/schema/component.schema';
import ListWidgetSchema from '@/interfaces/schema/list-widget.schema';
import StateSchema from '@/interfaces/schema/state.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import DataMappingService from '@/services/data-mapping.service';
import WidgetFamilySchema from '@/types/widget-family-schema';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { v1 as uuid } from 'uuid';
import MaterialType from '@/enum/schema/material-type.enum';
import PageSchema from '@/interfaces/schema/page.schema';
import BasicFormService from '@/services/forms/basic-form.service';
import ContainerSchema from '@/interfaces/schema/container.schema';
import SchemaRes from '@/interfaces/schema-res';
import { MessageService } from '@/services/message.service';

@Injectable({
  providedIn: 'root',
})
export default class SchemaService {
  constructor(
    private dataMappingService: DataMappingService,
    private basicFormService: BasicFormService,
    private nzMessageService: NzMessageService,
    private msgService: MessageService
  ) {}

  /*
   * 把 schema 转换为 控件树
   */
  convertSchemaToTree(schema: WidgetFamilySchema): WidgetTreeNode {
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
  saveSchemaToLocalStorage(schema: any, key: string = 'schema') {
    window.localStorage.setItem(key, JSON.stringify(schema));
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

  canHaveChildren(widgetType: InsertType | string) {
    const list: (InsertType | string)[] = [
      InsertType.container,
      InsertType.list,
      InsertType.table,
      InsertType.form,
      InsertType.tree,
    ];
    return list.includes(widgetType);
  }

  canRepeatChildren(widgetType: InsertType | string) {
    const list: (InsertType | string)[] = [InsertType.tree, InsertType.table, InsertType.list];
    return list.includes(widgetType);
  }

  /*
   * 通过组件 Schema 生成组件状态
   */
  convertSchemaToStates(componentSchema: ComponentSchema) {
    const { props, stateSchemaCollection } = componentSchema;
    const result = {};
    if (props && stateSchemaCollection) {
      Object.entries(stateSchemaCollection).forEach(([name, schema]) => {
        switch (schema.calculation.operator) {
          case StateOperator.filter:
            const { input } = schema.calculation;
            const dataRef = input[0];
            // 先用样例数据生成输入数据
            const data = this.dataMappingService.output(
              {
                ref: dataRef,
              },
              props.dataSourceSchema
            );
            // 表单内填写的用于过滤的 key
            const filterKey = input[1];
            /*
             * 由于保障抽象和灵活性，这里不能传入具体的值，而是要传入一个上下文，这个上下文包含了事件触发源（一个widget）
             * 可以传递给状态计算函数的所有数据，里边会包含一些不相关的，但是一定会包含必须的。这个也可以理解为是一种贪婪模式，
             * 有多少给多少
             * 默认情况下，集合类数据的项的上下文为当前数据项（可能是对象，如果不是对象，会被打包为一个上下文对象）
             *
             * 此外，这里使用了闭包，目前不能排除内存泄漏的可能性
             */
            result[name] = (ctx: StateSchema) => {
              return {
                stateName: name,
                stateValue: data.filter((item) => item[filterKey] === ctx[filterKey]),
              };
            };
            break;
          default:
            break;
        }
      });
    }
    return result;
  }

  async fetchComponentSchema(): Promise<SchemaRes<ComponentSchema>> {
    return new Promise<SchemaRes<ComponentSchema>>((resolve) => {
      resolve({
        code: 0,
        status: 200,
        data: JSON.parse(window.localStorage.getItem('schema')),
      });
    });
  }

  async fetchPageSchema(): Promise<void> {
    const { data } = await new Promise<SchemaRes<PageSchema>>((resolve) => {
      resolve({
        code: 0,
        status: 200,
        data: JSON.parse(window.localStorage.getItem('pageSchema')),
      });
    });
    if (data) {
      this.updatePageSchema(data);
    } else {
      this.createEmptyPageSchema();
    }
  }

  updatePageSchema(schema: PageSchema): void {
    this.msgService.updatePageSchema(schema);
  }

  // /*
  //  * 创建一个空的节点
  //  */
  // createEmptyTreeNode(): WidgetTreeNode {
  //   return {
  //     title: '新建容器',
  //     key: uuid(),
  //     isLeaf: true,
  //     expanded: true,
  //     type: MaterialType.component,
  //     schema: this.createEmptyContainerSchema(),
  //     children: [],
  //   };
  // }

  /*
   * 创建一个空的 page schema
   */
  createEmptyPageSchema(): void {
    const initialSchema = {
      // 页面 id （32位 uuid）
      id: uuid(),
      name: '新建页面',
      route: '',
      // 运行期间读取和写入的
      localStorage: {
        read: {},
        write: {},
      },
      query: {
        read: {},
        write: {},
      },
      // 页面用到的接口
      httpApi: [],
      // 发送事件给 native
      nativeEvent: {},
      // 接收 native 事件
      nativeMessage: {},
      // 页面的运行时状态 ( 包括远端数据 )
      state: {},
      // 页面内的交互事件
      events: {},
      componentSchema: this.createEmptyComponentSchema(),
    };
    this.msgService.resetPageSchema(initialSchema);
  }

  createEmptyComponentSchema(): ComponentSchema {
    return {
      containerSchema: this.createEmptyContainerSchema(),
      id: uuid(),
      name: '',
      stateSchemaCollection: {},
      props: {},
      type: InsertType.component,
    };
  }

  createEmptyContainerSchema(): ContainerSchema {
    return this.basicFormService.generateContainerSchema(
      {},
      MaterialType.container,
      this.basicFormService.generateBasicSchemaPartial({}, MaterialType.container)
    );
  }

  insertContainerElement(
    element: {
      type: InsertType | string;
      // 具体类型是一个 widget schema
      data: any;
    },
    treeData,
    selectedTreeNode
  ) {
    const result = {
      treeData: null,
      selectedKey: null,
    };
    const newNode: WidgetTreeNode = {
      title: element.data.title || element.data.name,
      key: element.data.id,
      isLeaf: true,
      type: element.type,
      schema: element.data,
    };
    if (this.canHaveChildren(element.type)) {
      newNode.children = [];
      newNode.expanded = true;
    }
    if (!treeData || !treeData.length) {
      result.treeData = [newNode];
      result.selectedKey = newNode.key;
    } else {
      // 暂时 any, 这个 schema 的类型体系需要重构下
      const parentNode = selectedTreeNode || treeData[0];

      // 原子性的组件不可以插入子元素
      if (!this.canHaveChildren(parentNode.type)) {
        this.nzMessageService.error('不可以给非容器类的元素插入子元素!');
        return;
      }

      if (!parentNode.children) {
        parentNode.children = [];
      }

      // schema 中插入子 schema
      if ('children' in parentNode.schema) {
        parentNode.schema.children.push(element.data);
      }
      // 树结点中插入新的子节点
      parentNode.children.push(newNode);
      parentNode.isLeaf = false;

      // 可阵列的元素，要设置 itemSchema
      if (this.canRepeatChildren(parentNode.schema.type)) {
        (parentNode.schema as ListWidgetSchema).itemSchema = newNode.schema;
      }

      // 处理下定位的问题
      if (
        this.canHaveChildren(element.type) &&
        element.data.styles.position.value === 'absolute' &&
        parentNode.schema.styles.position.value === Positioning.static
      ) {
        parentNode.schema.styles.position.value = Positioning.relative;
      }
      // TODO bug 在这里
      result.treeData = [parentNode];
      result.selectedKey = newNode.key;
    }
    return result;
  }

  generateSchema(insertType: InsertType) {
    return this.basicFormService.convertFormDataToSchema({}, insertType);
  }

  saveSchema(schema: any, key: string = 'schema') {
    this.saveSchemaToLocalStorage(schema, key);
  }

  /*
   * 删除某个节点
   */
  deleteWidget(schema: WidgetFamilySchema): void {
    // TODO
    console.log(schema);
  }
}

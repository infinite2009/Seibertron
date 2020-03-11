import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import InsertType from '@/enum/insert-type';
import WidgetSchema from '@/interfaces/widget.schematics';
import { FreeObject } from '@/interfaces/base';
import widgetSchematics from '@/schematics/widget.schematics';
import { ComponentPrototypeDirective } from '@/shared-module/directives/component-prototype.directive';

@Component({
  selector: 'byp-component-creation',
  templateUrl: './component-creation.component.html',
  styleUrls: ['./component-creation.component.less']
})
export class ComponentCreationComponent implements OnInit {
  constructor(
    private message: NzMessageService,
  ) { }

  /* bindings */
  @Input()
  selectedComponentPrototype;

  @ViewChild(ComponentPrototypeDirective, { static: true })
  cmpProto: ComponentPrototypeDirective;

  /* attributes */
  initialized = false;

  schema: WidgetSchema;

  InsertTypeEnum = InsertType;

  insertType: InsertType;

  dataSource: FreeObject = {
    select: [
      {
        id: 1,
        name: '测试1',
      },
      {
        id: 2,
        name: '测试2',
      },
    ]
  };

  /* 当前用户选中的焦点 */
  currentFocus: any;

  /* getters and setters */

  /* methods */

  /* member methods */

  /* event handlers */

  /* life cycle hooks */
  ngOnInit() {
  }

  /*
   * out put callback
   */
  setInsertType(insertType: number) {
    this.insertType = insertType;
  }

  /*
   * 插入元素
   */
  insertElement() {
    if (this.insertType !== InsertType.group && !this.initialized) {
      this.message.error('请先插入一个分组');
      return;
    }
    // TODO 还不知道该如何实现，因为目前不知道该如何确定当前插入的位置在哪里
    switch (this.insertType) {
      case InsertType.textArea:
        break;
      case InsertType.dataSource:
        break;
      case InsertType.group:
        this.initialized = true;
        if (!this.schema) {
          this.schema = this.processSchema(widgetSchematics);
        } else {
          // TODO 找到焦点元素对应的 schema 位置
          console.log('暂时不知道该怎么实现:-<');
        }
        break;
      default:
        return;
    }
  }

  processSchema(schema: WidgetSchema) {
    // 广度遍历
    let queue = [schema];
    while (queue.length) {
      const item = queue[0];
      if (item.structure.content.dataRef) {
        // 切割成员访问符（'.')，然后拼接为变量应用
        const refs = item.structure.content.dataRef.split('.');
        if (!refs.length) {
          throw Error(`invalid refs: ${item.structure.content.dataRef}`);
        }
        const { dataSource } = this;
        let ref = '';
        for (let i = 0, l = refs.length; i < l; i++) {
          ref = dataSource[refs[i]];
        }
        item.structure.content.value = ref;
      }
      queue = queue.concat(item.structure.children);
      queue.shift();
    }
    return schema;
  }
}

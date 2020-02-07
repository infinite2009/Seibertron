import {Component, ComponentFactoryResolver, Input, OnInit, Output, ViewChild} from '@angular/core';
import _ from 'lodash';
import { componentPrototypeList, constructors } from '../../../models/component-prototypes';
import { ComponentProtoType, Dictionary, SelectOption } from '../../../interfaces/base';
import { ComponentPrototypeDirective } from '../../../shared-module/directives/component-prototype.directive';
import WidgetSchema from '../../../interfaces/widget.schematics';
import { NzMessageService } from 'ng-zorro-antd';
// import buttonSchematics from '../../../schematics/button.schematics';

@Component({
  selector: 'byp-component-creation',
  templateUrl: './component-creation.component.html',
  styleUrls: ['./component-creation.component.less']
})
export class ComponentCreationComponent implements OnInit {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private message: NzMessageService,
  ) { }

  /* bindings */
  @Input()
  selectedComponentPrototype;

  @ViewChild(ComponentPrototypeDirective, { static: true })
  cmpProto: ComponentPrototypeDirective;

  /* attributes */
  initialized = false;

  schema: WidgetSchema = {};

  // componentPrototypeList: SelectOption[] = componentPrototypeList;

  componentConstructors: Dictionary<{ constructor: any, data: any}> = constructors;

  /* getters and setters */
  // get selectedComponentPrototypeName() {
  //   return this.getComponentPrototypeName();
  // }

  get currentComponentConstructor() {
    return this.componentConstructors[this.selectedComponentPrototype];
  }

  /* methods */

  /* member methods */
  // getComponentPrototypeName() {
  //   return this.componentPrototypeList.find(
  //     item => item.id === this.selectedComponentPrototype).name;
  // }

  loadComponentPrototype() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.currentComponentConstructor.constructor);
    const viewContainerRef = this.cmpProto.viewContainerRef;
    // 清空下指令的容器
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(factory);
    (componentRef.instance as ComponentProtoType).data = _.merge(this.currentComponentConstructor.data, {
      styles: {
        'border-color': 'red',
      }
    });
  }

  /* event handlers */
  // onChangeSelect() {
  //   this.loadComponentPrototype();
  // }

  /* life cycle hooks */
  ngOnInit() {
    // this.selectedComponentPrototype = this.componentPrototypeList[0].id;
    // 动态载入组件，切换 select 触发
    // this.loadComponentPrototype();
    // 渲染预览 schema
    // this.schema = buttonSchematics;
  }

  /*
   * out put callback
   */
  insertTextInput() {
    if (!this.initialized) {
      this.message.error('请先插入一个分组');
    }
  }

  /*
   * out put callback
   */
  insertDataSource() {
    // 指定字段映射到哪个UI上
    console.log('插入数据源');
  }

  /*
   * 插入分组元素
   */
  insertGroup() {

  }
}

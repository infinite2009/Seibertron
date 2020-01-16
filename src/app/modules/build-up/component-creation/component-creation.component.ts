import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import _ from 'lodash';
import { componentPrototypeList, constructors } from '../../../models/component-prototypes';
import { ComponentProtoType, Dictionary, SelectOption } from '../../../interfaces/base';
import { ComponentPrototypeDirective } from '../../../shared-module/directives/component-prototype.directive';
import WidgetSchema from '../../../interfaces/widget.schematics';

@Component({
  selector: 'byp-component-creation',
  templateUrl: './component-creation.component.html',
  styleUrls: ['./component-creation.component.less']
})
export class ComponentCreationComponent implements OnInit {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  schema: WidgetSchema = {

  };

  /* bindings */
  @Input()
  selectedComponentPrototype;

  @ViewChild(ComponentPrototypeDirective, { static: true })
  cmpProto: ComponentPrototypeDirective;

  /* getters and setters */
  get selectedComponentPrototypeName() {
    return this.getComponentPrototypeName();
  }

  get currentComponentConstructor() {
    return this.componentConstructors[this.selectedComponentPrototype];
  }

  /* member properties */
  componentPrototypeList: SelectOption[] = componentPrototypeList;

  componentConstructors: Dictionary<{ constructor: any, data: any}> = constructors;

  /* member methods */
  getComponentPrototypeName() {
    return this.componentPrototypeList.find(
      item => item.id === this.selectedComponentPrototype).name;
  }

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
  onChangeSelect() {
    this.loadComponentPrototype();
  }

  /* life cycle hooks */
  ngOnInit() {
    this.selectedComponentPrototype = this.componentPrototypeList[0].id;
    setTimeout(() => {
      this.loadComponentPrototype();
    });
  }
}

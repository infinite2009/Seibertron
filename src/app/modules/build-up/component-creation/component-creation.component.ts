import { Component, Input, OnInit } from '@angular/core';
import componentPrototypeList from '../../../models/component-prototypes';
import { SelectOption } from '../../../interfaces/base';

@Component({
  selector: 'byp-component-creation',
  templateUrl: './component-creation.component.html',
  styleUrls: ['./component-creation.component.less']
})
export class ComponentCreationComponent implements OnInit {
  constructor() { }

  /* static members */
  componentPrototypeList: SelectOption[] = componentPrototypeList;

  /* bindings */
  @Input()
  selectedComponentPrototype;

  // @Output()
  // selectedComponentPrototypeChange = $event => this.selectedComponentPrototype = $event;

  /* members */
  get selectedComponentPrototypeName() {
    return this.getComponentPrototypeName();
  }

  /* member methods */
  getComponentPrototypeName() {
    return this.componentPrototypeList.find(
      item => item.id === this.selectedComponentPrototype).name;
  }

  ngOnInit() {
    this.selectedComponentPrototype = this.componentPrototypeList[0].id;
  }
}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';
import { ComponentProtoType } from '../../../interfaces/base';
import { constructors } from '../../../models/component-prototypes';

@Component({
  selector: 'byp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements ComponentProtoType, OnInit, OnChanges {

  constructor() { }

  @Input()
  data: any = constructors.button.data;

  /* member properties */
  private internalData: any = constructors.button.data;

  ngOnInit() {
    this.internalData = _.merge(constructors.button.data, );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes.data.currentValue;
  }
}

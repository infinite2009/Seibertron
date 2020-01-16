import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import _ from 'lodash';
import {ComponentProtoType, FreeObject} from '../../../interfaces/base';
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
  styles: FreeObject = constructors.button.data.styles;

  /* member methods */
  updateStyles() {
    this.styles = _.merge(this.styles, this.data.styles);
  }

  ngOnInit() {
    this.updateStyles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes.data.currentValue;
    this.updateStyles();
  }
}

import { Component, OnInit } from '@angular/core';
import { ComponentProtoType } from '../../../interfaces/base';

@Component({
  selector: 'byp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements ComponentProtoType, OnInit {

  constructor() { }

  /* member properties */
  data: any;

  ngOnInit() {
  }

}

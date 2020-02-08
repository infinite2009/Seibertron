import { Component, OnInit } from '@angular/core';
import { ComponentProtoType } from '@/interfaces/base';

@Component({
  selector: 'byp-selector',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements ComponentProtoType, OnInit {

  constructor() { }

  /* member properties */
  data: any;

  ngOnInit() {
  }

}

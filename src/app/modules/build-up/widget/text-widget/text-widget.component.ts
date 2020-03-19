import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'byp-text-widget',
  templateUrl: './text-widget.component.html',
  styleUrls: ['./text-widget.component.less']
})
export class TextWidgetComponent implements OnInit {

  constructor() { }

  @Input() content: string;

  ngOnInit() {
  }

  handleClick($event) {

  }

  handleMouseEnter($event) {

  }

  handleMouseLeave($event) {

  }
}

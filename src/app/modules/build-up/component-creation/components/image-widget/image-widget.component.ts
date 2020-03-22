import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'byp-image-widget',
  templateUrl: './image-widget.component.html',
  styleUrls: ['./image-widget.component.less']
})
export class ImageWidgetComponent implements OnInit {

  constructor() { }

  @Input()
  src: string;

  @Input()
  alt: string;

  @Input()
  width: number;

  @Input()
  height: number;

  ngOnInit() {
  }

}

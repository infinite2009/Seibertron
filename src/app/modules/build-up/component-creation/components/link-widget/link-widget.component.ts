import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'byp-link-widget',
  templateUrl: './link-widget.component.html',
  styleUrls: ['./link-widget.component.less']
})
export class LinkWidgetComponent implements OnInit {

  constructor() { }

  @Input()
  url: string;

  @Input()
  title: string;

  ngOnInit() {
  }

}

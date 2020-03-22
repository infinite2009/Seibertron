import { Component, Input, OnInit } from '@angular/core';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd';

@Component({
  selector: 'byp-image-widget',
  templateUrl: './image-widget.component.html',
  styleUrls: ['./image-widget.component.less']
})
export class ImageWidgetComponent implements OnInit {

  constructor(
    private nzContextMenuService: NzContextMenuService
  ) { }

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

  handleContextMenu($event: MouseEvent, menu: NzDropdownMenuComponent) {
    $event.stopImmediatePropagation();
    this.nzContextMenuService.create($event, menu);
  }
}

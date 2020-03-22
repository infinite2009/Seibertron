import { Component, Input, OnInit } from '@angular/core';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd';

@Component({
  selector: 'byp-link-widget',
  templateUrl: './link-widget.component.html',
  styleUrls: ['./link-widget.component.less']
})
export class LinkWidgetComponent implements OnInit {

  constructor(
    private nzDropdownMenuService: NzContextMenuService
  ) { }

  @Input()
  url: string;

  @Input()
  title: string;

  ngOnInit() {
  }

  handleContextMenu($event: MouseEvent, menu: NzDropdownMenuComponent) {
    $event.stopImmediatePropagation();
    this.nzDropdownMenuService.create($event, menu);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { NzContextMenuService } from 'ng-zorro-antd';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown/nz-dropdown-menu.component';

@Component({
  selector: 'byp-text-widget',
  templateUrl: './text-widget.component.html',
  styleUrls: ['./text-widget.component.less']
})
export class TextWidgetComponent implements OnInit {

  constructor(
    private nzContextMenuService: NzContextMenuService,
  ) { }

  @Input() data: any;

  ngOnInit() {
    console.log('this.data: ', this.data);
  }

  handleClick($event) {

  }

  handleMouseEnter($event) {

  }

  handleMouseLeave($event) {

  }

  handleClickMenu($event) {

  }

  handleContextmenu($event: MouseEvent, menu: NzDropdownMenuComponent) {
    $event.stopImmediatePropagation();
    this.nzContextMenuService.create($event, menu);
  }
}

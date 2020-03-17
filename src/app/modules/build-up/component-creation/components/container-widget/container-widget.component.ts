import { Component, Input, OnInit } from '@angular/core';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd';
import ContextMenu from '@/enum/context-menu';

@Component({
  selector: 'byp-container-widget',
  templateUrl: './container-widget.component.html',
  styleUrls: ['./container-widget.component.less'],
})
export class ContainerWidgetComponent implements OnInit {

  constructor(private nzContextMenuService: NzContextMenuService) {
  }

  contextMenuEnum = ContextMenu;

  @Input()
  style: any;

  ngOnInit() {
  }

  closeMenu(): void {
    this.nzContextMenuService.close();
  }

  /* event handler */
  handleContextMenu($event: MouseEvent, menu: NzDropdownMenuComponent) {
    this.nzContextMenuService.create($event, menu);
  }

  handleClickMenu(type: ContextMenu) {
    console.log('type: ', type);
  }

}

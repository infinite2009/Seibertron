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

  drawerVisible: boolean = false;

  // UI类型
  type: ContextMenu;

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
    this.type = type;
    switch (type) {
      case ContextMenu.dataDriven:
        this.drawerVisible = true;
        break;
      case ContextMenu.logicDriven:
        this.drawerVisible = true;
        break;
    }
  }

  onDrawerClose() {
    this.drawerVisible = false;
  }

}

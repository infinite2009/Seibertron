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

  treeData: any[] = [];

  drawerVisible: boolean = false;

  // UI类型
  type: ContextMenu;

  get drawerTitle(): string {
    const { dataDriven, logicDriven } = this.contextMenuEnum;
    switch (this.type) {
      case dataDriven:
        return '数据驱动型UI设置';
      case logicDriven:
        return '逻辑驱动型UI设置';
      default:
        return '设置';
    }
  }

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

  handleTreeNodeClick($event) {
    console.log('handleTreeNodeClick: ', $event);
  }

  handleTreeNodeDrop($event) {
    console.log('handleTreeNodeDrop: ', $event);
  }

  onDrawerClose() {
    this.drawerVisible = false;
  }

}

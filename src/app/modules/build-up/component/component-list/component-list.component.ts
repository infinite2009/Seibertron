import IComponentListData from '@/interfaces/component/component-list-data';
import { ComponentManagementService } from '@/services/component/component-management.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.less']
})
export class ComponentListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private componentManagementService: ComponentManagementService,
    private msgService: NzMessageService,
  ) { }

  /* members */
  componentListData: IComponentListData[] = [];

  componentRegisterDrawerVisible: boolean = false;

  ngOnInit() {
    this.fetchListData();
  }

  async fetchListData() {
    this.componentListData = await this.componentManagementService.fetchListData();
  }

  /* handlers */
  handleClick() {
    this.router.navigate(['../create'], { relativeTo: this.route});
  }

  /* 跳转到流式创建 */
  jumpToFlow() {
    this.router.navigate(['../create-flow'], { relativeTo: this.route});
  }

  async deleteComponent(id: string) {
    await this.componentManagementService.deleteComponent(id);
    this.msgService.success('删除成功');
    this.fetchListData();
  }

  registerComponent() {
    // TODO
  }

  handleClosingDrawer() {
    this.componentRegisterDrawerVisible = false;
  }
}

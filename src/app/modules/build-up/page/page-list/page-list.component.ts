import IPageListData from '@/interfaces/page/page-list-data';
import { PageManagementService } from '@/services/page/page-management.service';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'seibertron-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.less']
})
export class PageListComponent implements OnInit {

  constructor(
    private pageManagementService: PageManagementService,
    private nzMessageService: NzMessageService,
  ) { }

  pageListData: IPageListData[] = [];

  async ngOnInit(): Promise<void> {
    this.pageListData = await this.pageManagementService.fetchListData();
  }

  async deletePage(id: string): Promise<void> {
    const res = await this.pageManagementService.deletePage(id);
    console.log('res: ', res);
    this.nzMessageService.success('删除成功');
  }
}

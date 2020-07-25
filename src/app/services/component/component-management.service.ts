import IComponentListData from '@/interfaces/component/component-list-data';
import componentListData from '@/mock/component/component-list-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentManagementService {

  constructor() { }

  async fetchListData(): Promise<IComponentListData[]> {
    return new Promise<IComponentListData[]>(resolve => {
      resolve(componentListData);
    });
  }

  /*
   * 如果没有 id ，就是新增
  */
  async save(id?: string): Promise<void> {
    return new Promise<void>(() => ({
      code: 0,
      msg: '更新成功'
    }));
  }

  async deleteComponent(id: string): Promise<string> {
    return new Promise<string>(resolve => {
      resolve(id);
    });
  }
}

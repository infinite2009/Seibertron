import { Injectable } from '@angular/core';
import IPageListData from '@/interfaces/page/page-list-data';
import pageListData from '@/mock/page/page-list-data';

@Injectable({
  providedIn: 'root'
})
export class PageManagementService {

  constructor() { }

  async fetchListData(): Promise<IPageListData[]> {
    return new Promise<IPageListData[]>(resolve => {
      resolve(pageListData);
    });
  }

  async deletePage(id: string): Promise<string> {
    return new Promise<string>(resolve => {
      resolve(id);
    });
  }
}

import { Injectable } from '@angular/core';
import { NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Injectable({
  providedIn: 'root'
})
export class FlowComponentService {

  constructor() { }

  fetchSymbols(): NodeModel[] {
    const mockData = [
      {
        id: 'text',
        name: '文本',
      },
      {
        id: 'button',
        name: '按钮'
      }
    ];
    return mockData.map(({id, name}) => {
      return {
        id,
        shape: {
          type: 'HTML',
          content: this.renderSymbolContentTpl(name)
        }
      };
    });
  }

  renderSymbolContentTpl(componentName: string = '未知组件') {
    return `<div style="height: 60px; width: 60px; background-color: rgb(53, 123, 210)"><!--
      -->${componentName}</div>`;
  }
}

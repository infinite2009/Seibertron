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
    return mockData.map(({ id, name }) => {
      return {
        id,
        shape: {
          type: 'HTML',
          content: `<div style="background:#6BA5D7;height:100%;width:100%;">
            <button type="button" style="height: 100%;width:100%">${name}</button>
          </div>`,
        },
      };
    });
  }
}

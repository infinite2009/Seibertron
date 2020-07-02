import { Injectable } from '@angular/core';
import { PaletteModel } from '@syncfusion/ej2-angular-diagrams';

@Injectable({
  providedIn: 'root'
})
export class FlowComponentService {

  constructor() { }

  fetchSymbols(): PaletteModel[] {
    const mockResult = [];
    const mockComponentsBase = [
      {
        id: 'text',
        name: '文本',
      },
      {
        id: 'button',
        name: '按钮'
      }
    ];
    const mockComponents = mockComponentsBase.map(({ id, name }) => {
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

    /*
     * 加入组件
     */
    mockResult.push({
      id: 'components',
      expanded: true,
      symbols: mockComponents,
      title: '组件'
    });

    mockResult.push({
      id: 'connectors',
      expanded: true,
      symbols: [
        {
          id: 'link',
          type: 'Orthogonal',
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 60, y: 60 },
          targetDecorator: { shape: 'Arrow' },
          style: { strokeWidth: 1 }
        }
      ],
      title: '连接器'
    });

    mockResult.push({
      id: 'request',
      expanded: true,
      iconCss: 'shapes',
      symbols: [
        {
          id: 'xhr',
          shape: {
            type: 'Bpmn',
            shape: 'DataSource',
          },
          annotations: [{ content: '接口' }],
        },
        {
          id: 'bridge',
          shape: {
            type: 'Bpmn',
            shape: 'Message',
          },
          annotations: [{ content: 'Jockey消息' }],
        },
      ],
      title: '跨端交互'
    });

    return mockResult;
  }
}

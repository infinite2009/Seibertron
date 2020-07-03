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
      },
      {
        id: 'table',
        name: '表格',
      },
      {
        id: 'selector',
        name: '选择器',
      },
      {
        id: 'list',
        name: '列表'
      },
      {
        id: 'lineChart',
        name: '折线图',
      },
      {
        id: 'barChart',
        name: '柱状图',
      },
      {
        id: 'pieChart',
        name: '饼状图',
      },
      {
        id: 'input',
        name: '输入框',
        annotations: [{
          content: '输入框'
        }],
      },
      {
        id: '复选框',
        name: 'checkbox',
        annotations: [{
          content: '复选框',
        }],
      },
      {
        id: '单选框',
        name: 'radio',
        annotations: [{
          content: '单选框',
        }],
      },
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
          id: '接口',
          shape: {
            type: 'Bpmn',
            shape: 'DataSource',
          },
          annotations: [{ content: '接口' }],
        },
        {
          id: 'Jockey',
          shape: {
            type: 'Bpmn',
            shape: 'Message',
          },
          annotations: [{ content: 'Jockey消息' }],
        },
      ],
      title: '跨端交互'
    });

    mockResult.push({
      id: 'event',
      expanded: true,
      symbols: [
        {
          id: '自定义事件',
          shape: {
            type: 'Bpmn',
            shape: 'Event',
          },
          annotations: [{ content: '自定义事件' }],
        }
      ],
      title: '事件'
    });

    mockResult.push({
      id: 'logic',
      expanded: true,
      symbols: [
        {
          id: '过滤器',
          shape: {
            type: 'Flow',
            shape: 'DirectData',
          },
          annotations: [{ content: '过滤' }]
        },
        {
          id: '合并器',
          shape: {
            type: 'Flow',
            shape: 'Merge',
          },
          annotations: [{ content: '合并' }],
        },
        {
          id: '判空器',
          shape: {
            type: 'Flow',
            shape: 'Decision'
          },
          annotations: [{ content: '判空器'}]
        }
      ],
      title: '逻辑器',
    });

    return mockResult;
  }
}

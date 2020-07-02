import { FlowComponentService } from '@/services/flow-component.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NodeModel, PaletteModel, SymbolInfo } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'seibertron-flow-component-creator',
  templateUrl: './flow-component-creator.component.html',
  styleUrls: ['./flow-component-creator.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowComponentCreatorComponent implements OnInit {

  constructor(private flowComponentService: FlowComponentService) { }

  palettes: PaletteModel[] = [
    {
      id: 'flow',
      expanded: true,
      symbols: [],
      title: '组件'
    },
    {
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
    }
  ];

  // 拖拽图标大小
  symbolSize = {
    width: 60,
    height: 60,
  };

  // 拖拽图标外边距
  symbolMargin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  };

  // 图的画布大小
  diagramSize = {
    width: 600,
    height: 600
  }

  ngOnInit(): void {
    this.palettes[0].symbols = this.flowComponentService.fetchSymbols();
  }

  getSymbolInfo(): SymbolInfo {
    return { fit: true };
  }

  getSymbolDefaults(symbol: NodeModel): void {
    symbol.width = 60;
    symbol.height = 60;
  }

}

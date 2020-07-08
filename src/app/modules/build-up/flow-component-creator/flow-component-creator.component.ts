import { FlowComponentService } from '@/services/flow-component.service';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { NodeModel, PaletteModel, PointPortModel, RulerSettingsModel, SymbolInfo } from '@syncfusion/ej2-diagrams';
import { NzTabPosition } from 'ng-zorro-antd';
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'seibertron-flow-component-creator',
  templateUrl: './flow-component-creator.component.html',
  styleUrls: ['./flow-component-creator.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowComponentCreatorComponent implements OnInit {
  @ViewChild('diagram')
  diagram: DiagramComponent;

  constructor(private flowComponentService: FlowComponentService) { }

  rulerSettings: RulerSettingsModel = { showRulers: true, dynamicGrid: true };

  tabs: number[] = [1, 2, 3];

  tabPosition: NzTabPosition = 'top';

  ports: PointPortModel[] = [
    {
      id: 'port1',
      offset: {
        x: 0,
        y: 0.5,
      },
    },
    {
      id: 'port2',
      offset: {
        x: 1,
        y: 0.5,
      },
    },
    {
      id: 'port3',
      offset: {
        x: 0.5,
        y: 0,
      },
    },
    {
      id: 'port4',
      offset: {
        x: 0.5,
        y: 1,
      },
    }
  ]

  palettes: PaletteModel[] = [];

  // 拖拽图标大小
  symbolSize = {
    width: 60,
    height: 80,
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
    width: '100%',
    height: 700
  }

  ngOnInit(): void {
    this.palettes = this.flowComponentService.fetchSymbols();
  }

  getSymbolInfo(symbol): SymbolInfo {
    return { fit: true, description: { text: symbol.id} };
  }

  getSymbolDefaults(symbol: NodeModel): void {
    symbol.width = 60;
    symbol.height = 60;
  }

  created(e: object):void {
    console.log('event: ', e);
    this.diagram.nodes.forEach(node => {
      this.diagram.addPorts(node, this.ports);
    });
  }

}

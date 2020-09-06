import WidgetMaterial from '@/interfaces/widget-material';
import { WidgetMaterialService } from '@/services/material/widget-material.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'seibertron-widget-material',
  templateUrl: './widget-material.component.html',
  styleUrls: ['./widget-material.component.less'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class WidgetMaterialComponent implements OnInit {
  constructor(
    private widgetMaterialService: WidgetMaterialService,
    private ref: ChangeDetectorRef,
    private dragulaService: DragulaService
  ) {
    this.dragulaService.createGroup('WIDGET', {
      copy: (el, source) => source.id === 'material-list',
      copyItem: (item: any) => {
        return { ...item };
      },
      accepts: (el, target) => target.id !== 'material-list',
    });
  }

  JSON = window.JSON;
  dropVal2: any = {};
  list: WidgetMaterial[] = [];

  async fetchWidgetMaterial(): Promise<void> {
    this.list = await this.widgetMaterialService.fetchWidgetMaterial();
    this.ref.detectChanges();
  }

  ngOnInit() {
    this.fetchWidgetMaterial();
  }

  onDrop2($event) {
    console.log('dropped in same component');
  }
}

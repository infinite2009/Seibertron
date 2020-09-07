import WidgetMaterial from '@/interfaces/widget-material';
import { WidgetMaterialService } from '@/services/material/widget-material.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'seibertron-widget-material',
  templateUrl: './widget-material.component.html',
  styleUrls: ['./widget-material.component.less'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class WidgetMaterialComponent implements OnInit {
  constructor(private widgetMaterialService: WidgetMaterialService, private ref: ChangeDetectorRef) {}

  dropVal2: any = {};
  list: WidgetMaterial[] = [];

  async fetchWidgetMaterial(): Promise<void> {
    this.list = await this.widgetMaterialService.fetchWidgetMaterial();
    this.ref.detectChanges();
  }

  ngOnInit() {
    this.fetchWidgetMaterial();
  }
}

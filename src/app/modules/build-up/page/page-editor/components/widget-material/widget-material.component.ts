import WidgetMaterial from '@/interfaces/widget-material';
import { WidgetMaterialService } from '@/services/material/widget-material.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'seibertron-widget-material',
  templateUrl: './widget-material.component.html',
  styleUrls: ['./widget-material.component.less'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class WidgetMaterialComponent implements OnInit {
  constructor(private widgetMaterialService: WidgetMaterialService) {}

  list: WidgetMaterial[] = [];

  ngOnInit() {
    this.fetchWidgetMaterial();
  }

  async fetchWidgetMaterial(): Promise<void> {
    this.list = await this.widgetMaterialService.fetchWidgetMaterial();
  }

}

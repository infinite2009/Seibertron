import WidgetMaterial from '@/interfaces/widget-material';
import mockWidgetMaterialData from '@/mock/material/widget-material';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetMaterialService {

  constructor() { }


  async fetchWidgetMaterial(): Promise<WidgetMaterial[]> {
    return new Promise<WidgetMaterial[]>(resolve => {
      resolve(mockWidgetMaterialData);
    });
  }
}

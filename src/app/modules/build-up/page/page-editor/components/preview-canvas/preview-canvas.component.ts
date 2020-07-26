import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'seibertron-preview-canvas',
  templateUrl: './preview-canvas.component.html',
  styleUrls: ['./preview-canvas.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewCanvasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

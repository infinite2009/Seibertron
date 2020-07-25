import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'seibertron-component-editor',
  templateUrl: './component-editor.component.html',
  styleUrls: ['./component-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

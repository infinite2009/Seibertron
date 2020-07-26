import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'seibertron-state-editor',
  templateUrl: './state-editor.component.html',
  styleUrls: ['./state-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'seibertron-logic-editor',
  templateUrl: './logic-editor.component.html',
  styleUrls: ['./logic-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogicEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

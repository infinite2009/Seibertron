import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'seibertron-action-editor',
  templateUrl: './action-editor.component.html',
  styleUrls: ['./action-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'seibertron-style-editor',
  templateUrl: './style-editor.component.html',
  styleUrls: ['./style-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StyleEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

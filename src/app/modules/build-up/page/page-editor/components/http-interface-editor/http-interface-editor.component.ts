import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'seibertron-http-interface-editor',
  templateUrl: './http-interface-editor.component.html',
  styleUrls: ['./http-interface-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HttpInterfaceEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

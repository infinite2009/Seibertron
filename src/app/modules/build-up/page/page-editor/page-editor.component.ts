import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'seibertron-page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.less']
})
export class TableFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

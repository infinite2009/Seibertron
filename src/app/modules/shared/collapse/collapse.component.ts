import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'seibertron-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollapseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

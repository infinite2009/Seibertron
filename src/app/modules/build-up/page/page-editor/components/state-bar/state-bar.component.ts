import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'seibertron-state-bar',
  templateUrl: './state-bar.component.html',
  styleUrls: ['./state-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

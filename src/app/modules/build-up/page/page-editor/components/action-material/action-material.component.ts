import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'seibertron-action-material',
  templateUrl: './action-material.component.html',
  styleUrls: ['./action-material.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionMaterialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

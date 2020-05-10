import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-component-management',
  templateUrl: './component-management.component.html',
  styleUrls: ['./component-management.component.less']
})
export class ComponentManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

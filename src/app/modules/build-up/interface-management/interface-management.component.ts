import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-interface-management',
  templateUrl: './interface-management.component.html',
  styleUrls: ['./interface-management.component.less']
})
export class InterfaceManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'seibertron-http-interface-material',
  templateUrl: './http-interface-material.component.html',
  styleUrls: ['./http-interface-material.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HttpInterfaceMaterialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

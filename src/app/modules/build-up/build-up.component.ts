import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-build-up',
  templateUrl: './build-up.component.html',
  styleUrls: ['./build-up.component.less']
})
export class BuildUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

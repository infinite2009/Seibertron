import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'seibertron-material-wrapper',
  templateUrl: './material-wrapper.component.html',
  styleUrls: ['./material-wrapper.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

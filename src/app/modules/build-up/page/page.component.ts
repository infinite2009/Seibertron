import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'seibertron-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

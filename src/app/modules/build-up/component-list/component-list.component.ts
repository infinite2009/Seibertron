import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.less']
})
export class ComponentListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /* handlers */
  handleClick() {
    this.router.navigate(['../create'], { relativeTo: this.route});
  }

  /* 跳转到流式创建 */
  jumpToFlow() {
    this.router.navigate(['../create-flow'], { relativeTo: this.route});
  }
}

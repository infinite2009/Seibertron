import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
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
}

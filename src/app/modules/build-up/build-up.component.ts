import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-build-up',
  templateUrl: './build-up.component.html',
  styleUrls: ['./build-up.component.less']
})
export class BuildUpComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {
    this.subscription = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = e.url;
      }
    });
  }

  currentRoute: string;

  subscription: Subscription;

  ngOnInit() {
    console.log(this.location);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isCurrentRoute(route: string) {
    return this.currentRoute.indexOf(route) > -1;
  }
}

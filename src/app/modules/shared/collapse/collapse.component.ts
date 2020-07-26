import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'seibertron-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openAndClose', [
      state('open', style({
        // 只能用 * 表示自由宽度 ，不可以用 auto
        width: '*',
      })),
      state('close', style({
        width: '32px',
      })),
      transition('open <=> close', [
        animate('0.25s')
      ]),
    ]),
  ]
})
export class CollapseComponent implements OnInit {

  constructor() { }

  @HostBinding('@openAndClose')
  get toggle(): string {
    return this.isOpen ? 'open' : 'close';
  }

  isOpen: boolean = true;

  ngOnInit(): void {
  }

  toggleCollapse() {
    this.isOpen = !this.isOpen;
  }
}

import { CollapseHolderPlacement } from '@/types';
import { Component, OnInit, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';
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

  @Input()
  placement: CollapseHolderPlacement = 'right';

  isOpen: boolean = true;

  get placementStyle() {
    const result: { left?: number; right?: number; } = {};
    switch (this.placement) {
      case 'right':
        result.right = 0;
        break;
      case 'left':
      default:
        result.left = 0;
        break;
    }
    return result;
  }

  ngOnInit(): void {
  }

  toggleCollapse() {
    this.isOpen = !this.isOpen;
  }
}

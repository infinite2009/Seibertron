import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'seibertron-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  active: boolean = true;

  @Output()
  editModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  handleChangingSwitch(e: any) {
    this.active = e;
    this.editModeChange.emit(this.active);
  }

}

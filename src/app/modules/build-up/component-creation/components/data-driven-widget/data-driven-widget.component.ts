import { Component, Input, OnInit } from '@angular/core';
import { OperationService } from '@/services/operation.service';

@Component({
  selector: 'byp-data-driven-widget',
  templateUrl: './data-driven-widget.component.html',
  styleUrls: ['./data-driven-widget.component.less']
})
export class DataDrivenWidgetComponent implements OnInit {

  constructor(private operationService: OperationService) { }

  @Input()
  data: any;

  @Input()
  operations: any;

  ngOnInit() {
  }


}

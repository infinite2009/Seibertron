import WidgetTreeNode from '@/interfaces/tree-node';
import WidgetFamilySchema from '@/types/widget-family-schema';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'seibertron-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.less']
})
export class EventFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  @Input()
  widgetTree: WidgetTreeNode[] = [];

  selectedSourceWidgetKey: string;

  selectedTargetWidgetKey: string;

  validateForm: FormGroup;

  eventTypeOptions: {value: string; name: string}[] = [
    {
      value: 'click',
      name: '点击',
    },
    {
      value: 'mouseenter',
      name: '鼠标移入',
    },
    {
      value: 'mouseleave',
      name: '鼠标移出',
    },
    {
      value: 'interval',
      name: '周期',
    },
    {
      value: 'exposure',
      name: '曝光',
    },
    {
      value: 'fetchData',
      name: '刷新数据',
    },
  ];

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      eventType: ['', [Validators.required]],
      sourceWidget: [null, [Validators.required]],
      targetWidget: [null, [Validators.required]],
    });
    console.log('widget: ', this.widgetTree);
  }

  handleTreeNodeClick($event, widgetType) {
    if (widgetType === 'sourceWidget') {
      this.selectedTargetWidgetKey = $event.node.key;
    } else if (widgetType === 'targetWidget') {
      this.selectedTargetWidgetKey = $event.node.key;
    }
  }

  onSubmit() {
    console.log('valid form: ', this.validateForm.value);

  }

}

import StateOperator from '@/enum/schema/state-operator.enum';
import WidgetTreeNode from '@/interfaces/tree-node';
import FormItem from '@/models/form/form-item';
import StyleFormItem from '@/models/form/style-form-item';
import { BasicFormService } from '@/services/forms/basic-form.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzCascaderOption } from 'ng-zorro-antd';

@Component({
  selector: 'seibertron-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.less']
})
export class EventFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private basicFormService: BasicFormService) { }

  @Input()
  widgetTree: WidgetTreeNode[] = [];

  selectedSourceWidgetKey: string;

  selectedTargetWidgetKey: string;

  lastStateOperator: StateOperator;

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

  formGroups: {
    name: string;
    items: (FormItem<any> | StyleFormItem<any>)[];
  }[] = [];

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      eventType: ['', [Validators.required]],
      sourceWidget: [null, [Validators.required]],
      targetWidget: [null, [Validators.required]],
    });
    this.generateFormItems([
      {
        name: '触发设置',
        items: this.basicFormService.getTriggeringFormItems(),
      },
      {
        name: '布局',
        items: [],
      },
      {
        name: '样式',
        items: [],
      },
      {
        name: '交互',
        items: [],
      },
      {
        name: '状态计算',
        items: this.basicFormService.getStateFormItems(),
      },
      {
        name: '数据源',
        items: [],
      },
    ]);
    console.log('widget: ', this.widgetTree);
  }

  convertLabelToRef(labels: (string | number)[]) {
    return labels.join('.').replace(/\.(\d+)/, '$1');
  }

  /*
   * 生成 form items
   */
  generateFormItems(formGroups: any[]) {
    this.formGroups = formGroups;
    const tmp = {};
    this.formGroups.forEach(group => {
      group.items.forEach((item) => {
        tmp[item.name] = [null, [Validators.required]];
      });
    });
    this.validateForm = this.fb.group(tmp);
  }

  hof(item: FormItem): (option: NzCascaderOption, _index: number) => boolean {
    return (option: NzCascaderOption, _index: number) => this.handleChangingCascade(option, _index, item);
  }

  handleChangingCascade(option: NzCascaderOption, _index: number, item: FormItem): boolean {
    return option.type === item.valueType;
  }

  handleChangingSelect($event, name) {
    if (name === 'stateOperator' && this.lastStateOperator !== $event) {
      this.lastStateOperator = $event;
      this.generateFormItems([
        {
          name: '基本设置',
          items: this.basicFormService.getStateFormItems({
            stateOperator: this.lastStateOperator,
          }),
        },
      ]);
    }
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

import StateOperator from '@/enum/schema/state-operator.enum';
import WidgetTreeNode from '@/interfaces/tree-node';
import FormItem from '@/models/form/form-item';
import StyleFormItem from '@/models/form/style-form-item';
import { BasicFormService } from '@/services/forms/basic-form.service';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.less']
})
export class EventFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private basicFormService: BasicFormService) { }

  @Input()
  widgetTree: WidgetTreeNode[] = [];

  @Output()
  formChange: EventEmitter<any> = new EventEmitter<any>();

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
    this.generateFormItems([
      {
        name: '触发设置',
        items: this.basicFormService.getTriggeringFormItems(this.widgetTree),
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
    const values = this.validateForm?.value;
    if (values) {
      Object.entries(values).forEach(([key, val]) => {
        if (tmp[key]) {
          tmp[key][0] = val
        } else {
          tmp[key] = [val, [Validators.required]];
        }
      });
    }
    this.validateForm = this.fb.group(tmp);
  }

  handleChangingSelect($event, name) {
    if (name === 'stateOperator' && this.lastStateOperator !== $event) {
      this.lastStateOperator = $event;
      this.formGroups[4] = {
        name: '状态计算',
        items: this.basicFormService.getStateCalculationEffectFormItems(),
      };
      this.generateFormItems([...this.formGroups]);
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
    this.formChange.emit({
      type: 'insert',
      payload: {
        type: 'state',
        data: this.validateForm.value,
      }
    });
  }

}

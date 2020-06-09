import CommandType from '@/enum/command-type';
import StateOperator from '@/enum/schema/state-operator.enum';
import InsertType from '@/enum/schema/widget-type.enum';
import ICommandPayload from '@/interfaces/command-payload';
import DataSourceSchema from '@/interfaces/schema/data-source.schema';
import StateCollectionSchema from '@/interfaces/schema/state-collection-schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import FormItem from '@/models/form/form-item';
import StyleFormItem from '@/models/form/style-form-item';
import { BasicFormService } from '@/services/forms/basic-form.service';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import DynamicObject from '@/interfaces/dynamic-object';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-insert-command',
  templateUrl: './insert-command.component.html',
  styleUrls: ['./insert-command.component.less'],
})
export class InsertCommandComponent implements OnInit, OnChanges {
  constructor(
    private basicFormService: BasicFormService,
    private formBuilder: FormBuilder,
    private nzMessageService: NzMessageService
  ) {}

  @Input()
  dataSourceSchema: DataSourceSchema;

  @Input()
  stateCollectionSchema: StateCollectionSchema;

  @Input()
  selectedKey: string;

  @Input()
  treeData: WidgetTreeNode[];

  @Output()
  execute: EventEmitter<ICommandPayload> = new EventEmitter<ICommandPayload>();

  formGroups: {
    name: string;
    items: (FormItem<any> | StyleFormItem<any>)[];
  }[] = [];

  validateForm: FormGroup;

  visible: boolean = false;

  dataSourceModalVisible: boolean = false;

  currentType: InsertType | string = null;

  eventDrawerVisible: boolean = false;

  stateDrawerVisible: boolean = false;

  lastStateOperator: StateOperator;

  commands: {name: string; type: string; handler: ($event, type: string) => {}}[] = [
    {
      name: '容器',
      type: 'container',
      handler: this.handleInserting.bind(this, this, InsertType.container),
    },
    {
      name: '文本',
      type: 'text',
      handler: this.handleInserting.bind(this, this, InsertType.text),
    },
    {
      name: '链接',
      type: 'link',
      handler: this.handleInserting.bind(this, this, InsertType.link),
    },
    {
      name: '列表',
      type: 'list',
      handler: this.handleInserting.bind(this, this, InsertType.list),
    },
    {
      name: '表格',
      type: 'table',
      handler: this.handleInserting.bind(this, this, InsertType.table),
    },
    {
      name: '图片',
      type: 'image',
      handler: this.handleInserting.bind(this, this, InsertType.image),
    },
    {
      name: '表单',
      type: 'form',
      handler: this.handleInserting.bind(this, this, InsertType.form),
    },
    {
      name: '事件',
      type: 'event',
      handler: this.handleInsertingEvent.bind(this, this),
    },
    {
      name: '数据源',
      type: 'dataSource',
      handler: this.handleInsertingDataSource.bind(this, this),
    },
    {
      name: '状态值',
      type: 'state',
      handler: this.handleInsertingState.bind(this, this),
    },
  ];

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes in insert command: ', changes);
    this.basicFormService.stateCollectionSchema = changes.stateCollectionSchema?.currentValue;
    if (changes.dataSourceSchema?.currentValue) {
      this.basicFormService.dataSourceSchema = changes.dataSourceSchema?.currentValue;
    }
  }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({});
  }

  convertLabelToRef(labels: (string | number)[]) {
    return labels.join('.').replace(/\.(\d+)/, '$1');
  }

  handleClosingDrawer() {
    this.eventDrawerVisible = false;
  }

  handleChangingSelect($event, name) {
    if (name === 'stateOperator' && this.lastStateOperator !== $event) {
      this.lastStateOperator = $event;
      this.generateFormItems([
        {
          name: '基本设置',
          items: this.basicFormService.getStateFormItems({
            stateOperator: this.lastStateOperator,
            ...this.validateForm.getRawValue(),
          }),
        },
      ]);
    }
  }

  /* event handlers */
  handleInserting(thisArg, currentType) {
    this.formGroups = [];
    this.currentType = currentType;
    const containerFormGroups = [
      {
        name: '基本设置',
        items: this.basicFormService.getBasicFormItems(),
      },
      {
        name: '边框',
        items: [
          ...this.basicFormService.getMarginFormItems(),
          ...this.basicFormService.getBorderFormItems(),
          ...this.basicFormService.getPaddingFormItems(),
        ],
      },
      {
        name: '高度',
        items: this.basicFormService.getHeightFormItems(),
      },
      {
        name: '宽度',
        items: this.basicFormService.getWidthFormItems(),
      },
      {
        name: '子元素对齐方式',
        items: this.basicFormService.getAlignmentFormItems(),
      },
      {
        name: '高级设置',
        items: [
          ...this.basicFormService.getLayoutFormItems(),
          ...this.basicFormService.getPositioningFormItems(),
          ...this.basicFormService.getBackgroundFormItems(),
        ],
      },
    ];
    const dataSourceFormGroups = {
      name: '数据源设置',
      items: this.basicFormService.getListDataSourceFormItems(),
    };
    let cascadeOptions;
    switch (currentType) {
      case InsertType.container:
        this.formGroups = containerFormGroups;
        break;
      case InsertType.list:
        cascadeOptions = this.basicFormService.convertDataSourceSchemaToCascadeOptions();
        if (!cascadeOptions) {
          this.nzMessageService.error('请先插入列表数据源，然后重试');
          return;
        }
        containerFormGroups.splice(1, 0, dataSourceFormGroups);
        this.formGroups = containerFormGroups;
        break;
      case InsertType.text:
        this.formGroups = [
          {
            name: '基本设置',
            items: this.basicFormService.getBasicFormItems(),
          },
          {
            name: '文字设置',
            items: this.basicFormService.getTextFormItems(),
          },
        ];
        break;
      case InsertType.link:
        this.formGroups = [
          {
            name: '基本设置',
            items: this.basicFormService.getBasicFormItems(),
          },
          {
            name: '链接设置',
            items: this.basicFormService.getLinkFormItems(),
          },
        ];
        break;
      case InsertType.image:
        this.formGroups = [
          {
            name: '基本设置',
            items: this.basicFormService.getBasicFormItems(),
          },
          {
            name: '图片设置',
            items: this.basicFormService.getImageFormItems(),
          },
        ];
        break;
      case 'table':
        cascadeOptions = this.basicFormService.convertDataSourceSchemaToCascadeOptions();
        if (!cascadeOptions) {
          this.nzMessageService.error('请先插入列表数据源，然后重试');
          return;
        }
        this.formGroups = [
          {
            name: '基本设置',
            items: this.basicFormService.getBasicFormItems(),
          },
          dataSourceFormGroups,
        ];
        break;
      case 'form':
        break;
      default:
        throw new Error(`unknown type: ${currentType}`);
    }
    const tmp = {};
    this.formGroups.forEach((group) => {
      group.items.forEach((item) => {
        tmp[item.name] = [null, [Validators.required]];
      });
    });
    this.validateForm = this.formBuilder.group(tmp);
    this.visible = true;
  }

  handleInsertingEvent() {
    this.currentType = 'event';
    this.eventDrawerVisible = true;
  }

  handleInsertingDataSource() {
    this.dataSourceModalVisible = true;
    this.currentType = 'dataSource';
    this.formGroups = [
      {
        name: '数据源设置',
        items: this.basicFormService.getDataSourceForm(),
      },
    ];
    const tmp = {};
    this.formGroups.forEach((group) => {
      group.items.forEach((item) => {
        tmp[item.name] = [null, [Validators.required]];
      });
    });
    this.validateForm = this.formBuilder.group(tmp);
  }

  /*
   * 显示计算状态值的界面
   */
  handleInsertingState() {
    this.currentType = 'state';
    this.generateFormItems([
      {
        name: '基本设置',
        items: this.basicFormService.getStateFormItems(),
      },
    ]);
    this.showStateDrawerVisible();
  }

  hideDataSourceModal() {
    this.dataSourceModalVisible = false;
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
    this.validateForm = this.formBuilder.group(tmp);
  }

  /*
   * 隐藏状态计算界面
   */
  hideStateDrawerVisible() {
    this.stateDrawerVisible = false;
  }

  hideModal() {
    this.visible = false;
  }

  onSubmit($event: DynamicObject = null) {
    let data;
    if ($event) {
      data = this.basicFormService.convertFormDataToSchema($event.payload.data, this.currentType);
    } else {
      data = this.basicFormService.convertFormDataToSchema(this.validateForm.getRawValue(), this.currentType);
    }
    switch (this.currentType) {
      case 'state':
          this.hideStateDrawerVisible();
          break;
      case 'event':
        this.handleClosingDrawer();
        break;
      default:
        this.hideModal();
        break;
    }
    this.execute.emit({
      type: CommandType.insert,
      payload: {
        type: this.currentType,
        data,
      },
    });
  }

  onSubmitDataSource() {
    this.hideDataSourceModal();
    const formValue = this.validateForm.getRawValue();
    try {
      const dataSourceSchema: DataSourceSchema = this.basicFormService.exportDataSourceSchema(formValue.dataSource);
      this.execute.emit({
        type: CommandType.insert,
        payload: {
          type: this.currentType,
          data: dataSourceSchema,
        },
      });
      this.basicFormService.dataSourceSchema = dataSourceSchema;
    } catch (err) {
      this.nzMessageService.error(err);
    }
  }

  /*
   * 显示状态计算界面
   */
  showStateDrawerVisible() {
    this.stateDrawerVisible = true;
  }
}

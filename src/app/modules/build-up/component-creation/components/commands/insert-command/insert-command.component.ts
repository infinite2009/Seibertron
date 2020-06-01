import CommandType from '@/enum/command-type';
import StateOperator from '@/enum/schema/state-operator.enum';
import WidgetType from '@/enum/schema/widget-type.enum';
import ICommandPayload from '@/interfaces/command-payload';
import DataSourceSchema from '@/interfaces/schema/data-source.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import FormItem from '@/models/form/form-item';
import StyleFormItem from '@/models/form/style-form-item';
import { BasicFormService } from '@/services/forms/basic-form.service';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-insert-command',
  templateUrl: './insert-command.component.html',
  styleUrls: ['./insert-command.component.less'],
})
export class InsertCommandComponent implements OnInit {
  constructor(
    private basicFormService: BasicFormService,
    private formBuilder: FormBuilder,
    private nzMessageService: NzMessageService
  ) {}

  @Input()
  dataSourceSchema: DataSourceSchema;

  @Input()
  selectedKey: string;

  @Input()
  treeData: WidgetTreeNode[];

  @Output()
  execute: EventEmitter<ICommandPayload> = new EventEmitter<ICommandPayload>();

  self = this;

  formGroups: {
    name: string;
    items: (FormItem<any> | StyleFormItem<any>)[];
  }[] = [];

  options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
              isLeaf: true
            }
          ]
        },
        {
          value: 'ningbo',
          label: 'Ningbo',
          isLeaf: true
        }
      ]
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
              isLeaf: true
            }
          ]
        }
      ]
    }
  ];

  validateForm: FormGroup;

  visible: boolean = false;

  dataSourceModalVisible: boolean = false;

  tableModalVisible: boolean = false;

  currentType: WidgetType | string = null;

  eventDrawerVisible: boolean = false;

  stateDrawerVisible: boolean = false;

  lastStateOperator: StateOperator;

  commands: any[] = [
    {
      name: '容器',
      type: 'container',
      handler: this.handleInserting.bind(this, this, WidgetType.container),
    },
    {
      name: '文本',
      type: 'text',
      handler: this.handleInserting.bind(this, this, WidgetType.text),
    },
    {
      name: '链接',
      type: 'link',
      handler: this.handleInserting.bind(this, this, WidgetType.link),
    },
    {
      name: '列表',
      type: 'list',
      handler: this.handleInserting.bind(this, this, WidgetType.list),
    },
    {
      name: '表格',
      type: 'table',
      handler: this.handleInserting.bind(this, this, WidgetType.table),
    },
    {
      name: '图片',
      type: 'image',
      handler: this.handleInserting.bind(this, this, WidgetType.image),
    },
    {
      name: '表单',
      type: 'form',
      handler: this.handleInserting.bind(this, this, WidgetType.form),
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

  ngOnInit() {
    this.validateForm = this.formBuilder.group({});
    this.basicFormService.dataSourceSchema = this.dataSourceSchema;
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
      case WidgetType.container:
        this.formGroups = containerFormGroups;
        break;
      case WidgetType.list:
        cascadeOptions = this.basicFormService.convertDataSourceSchemaToCascadeOptions();
        if (!cascadeOptions) {
          this.nzMessageService.error('请先插入列表数据源，然后重试');
          return;
        }
        containerFormGroups.splice(1, 0, dataSourceFormGroups);
        this.formGroups = containerFormGroups;
        break;
      case WidgetType.text:
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
      case WidgetType.link:
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
      case WidgetType.image:
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
        // TODO
        break;
      default:
        throw new Error(`unknown type: ${currentType}`);
    }
    // TODO 后续要重构
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
    this.eventDrawerVisible = true;
  }

  handleEventForm($event) {
    console.log('event form: ', $event);
    this.hideStateDrawerVisible();
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

  onSubmit() {
    const data = this.basicFormService.convertFormDataToSchema(this.validateForm.getRawValue(), this.currentType);
    if (this.currentType === 'state') {
      this.hideStateDrawerVisible();
    } else {
      this.hideModal();
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

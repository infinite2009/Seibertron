import DynamicObject from '@/interfaces/dynamic-object';
import ListItemOption from '@/interfaces/list-item-option';
import { DataMappingService } from '@/services/data-mapping.service';
import { SchemaService } from '@/services/schema.service';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import WidgetTreeNode from '@/interfaces/tree-node';
import { BasicFormService } from '@/services/forms/basic-form.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import Layout from '@/enum/layout';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-tree-widget',
  templateUrl: './tree-widget.component.html',
  styleUrls: ['./tree-widget.component.less'],
})
export class TreeWidgetComponent implements OnInit {
  constructor(
    private basicFormService: BasicFormService,
    private dataMappingService: DataMappingService,
    private schemaService: SchemaService,
    private domSanitizer: DomSanitizer
  ) {}

  @Input()
  data: WidgetTreeNode;

  @Input()
  props: DynamicObject;

  // 父节点的 data（根元素的 parent 为 null)
  @Input()
  parent: WidgetTreeNode;

  @Input()
  listItemOption: ListItemOption;

  @HostBinding('style')
  get hostStyles(): SafeStyle {
    // TODO 用其他生命周期优化下
    if (this.schemaService.canHaveChildren(this.data.schema.type)) {
      let styleStr = this.basicFormService.convertSchemaToStyleStr(this.data.schema);
      if (this.parent && this.parent.schema.styles.display.value === Layout.flex) {
        styleStr += 'flex-shrink: 0';
      }
      return this.domSanitizer.bypassSecurityTrustStyle(styleStr);
    }
    return this.domSanitizer.bypassSecurityTrustStyle('flex-shrink: 0');
  }

  get styles() {
    return this.basicFormService.convertSchemaToStyles(this.data.schema);
  }

  ngOnInit() {
    console.log('tree widget initialized: ');
  }

  output(key: string) {
    const { data, operation } = this.data?.schema?.dataMapping[key];
    if (operation) {
      return this.dataMappingService.output(operation, this.props?.dataSourceSchema, this.listItemOption);
    }
    return data;
  }

  trackByItems(index: number, item: any) {
    return item.id;
  }
}

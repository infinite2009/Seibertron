import { Component, HostBinding, Input, OnInit } from '@angular/core';
import WidgetTreeNode from '@/interfaces/tree-node';
import { BasicFormService } from '@/services/forms/basic-form.service';
import { StyleCollectionSchema } from '@/interfaces/schema/style-collection.schema';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import Layout from '@/enum/layout';

@Component({
  selector: 'byp-tree-widget',
  templateUrl: './tree-widget.component.html',
  styleUrls: ['./tree-widget.component.less'],
})
export class TreeWidgetComponent implements OnInit {

  constructor(
    private basicFormService: BasicFormService,
    private domSanitizer: DomSanitizer
  ) { }

  @Input()
  data: WidgetTreeNode;

  // 父节点的 data（根元素的 parent 为 null)
  @Input()
  parent: WidgetTreeNode;

  @HostBinding('style')
  get getStyles(): SafeStyle {
    console.log('父节点：', this.parent && this.parent.schema.name);
    let styleStr = this.basicFormService.convertSchemaToStyleStr(this.data.schema);
    if (this.parent) {
      if (this.parent.schema.styles.display.value === Layout.flex) {
        styleStr += 'flex-shrink: 0';
      }
    }
    return this.domSanitizer.bypassSecurityTrustStyle(styleStr);
  }

  styles(item, parent = null) {
    if (!item) {
      return {};
    }
    const styles = this.basicFormService.convertSchemaToStyles(item.schema);
    // 判断父节点是否存在 flex
    if (parent) {
      const parentStyles: StyleCollectionSchema = parent.schema.styles;
      if (parentStyles.display && parentStyles.display.value === 'flex') {
        styles['flex-shrink'] = 0;
      }
    }
    return styles;
  }

  ngOnInit() {}

}

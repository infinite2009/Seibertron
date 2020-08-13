import WidgetFamilySchema from '@/types/widget-family-schema';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import PageSchema from '@/interfaces/schema/page.schema';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'seibertron-page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageEditorComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  currentPageSchema: PageSchema;

  selectedSchema: WidgetFamilySchema;

  ngOnInit(): void {}
}

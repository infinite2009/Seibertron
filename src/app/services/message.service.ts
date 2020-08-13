import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import PageSchema from '@/interfaces/schema/page.schema';
import WidgetFamilySchema from '@/types/widget-family-schema';
import StateSchema from '@/interfaces/schema/state.schema';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  // 需要传递一个初始值
  private messageSource = new ReplaySubject<any>(3);
  message = this.messageSource.asObservable();
  private pageSchemaMsgSource = new ReplaySubject<PageSchema>(1);
  pageSchemaMsg = this.pageSchemaMsgSource.asObservable();

  private selectedStateSchemaMsgSource = new ReplaySubject<StateSchema>(1);
  selectedStateSchemaMsg = this.selectedStateSchemaMsgSource.asObservable();

  private selectedSchemaMsgSource = new ReplaySubject<any>(1);
  selectedSchemaMsg = this.selectedSchemaMsgSource.asObservable();

  sendMessage(message: any) {
    this.messageSource.next(message);
  }

  /*
   * 更新 pageSchema
   */
  updatePageSchema(pageSchema: PageSchema) {
    this.pageSchemaMsgSource.next(pageSchema);
  }

  /*
   * 清空画布时，重置 page schema
   */
  resetPageSchema(pageSchema: PageSchema) {
    this.updatePageSchema(pageSchema);
  }

  /*
   * 选择一个 widget
   */
  selectWidget(widgetSchema: WidgetFamilySchema) {
    this.selectedSchemaMsgSource.next(widgetSchema);
  }

  /*
   * 反选当前选中的 widget
   */
  unselectWidget() {
    this.selectWidget(null);
  }

  /*
   * 选择一个状态
   */
  selectState(stateSchema: StateSchema) {
    this.selectedSchemaMsgSource.next(stateSchema);
  }

  /*
   * 反选一个状态
   */
  unselectState() {
    this.selectWidget(null);
  }

  /*
   * 选择一个路由查询
   */
  // TODO 需要明确类型
  selectRouteQuery(query: any) {
    this.selectedSchemaMsgSource.next(query);
  }

  /*
   * 反选一个路由查询
   */
  unselectRouteQuery() {
    this.selectRouteQuery(null);
  }
}

import { Injectable } from '@angular/core';
import EventSchema from '@/interfaces/schema/event.schema';
import DynamicObject from '@/interfaces/dynamic-object';
import WidgetFamilySchema from '@/types/widget-family-schema';

@Injectable({
  providedIn: 'root'
})
export class WidgetOperationsService {

  constructor() { }

  private schema: WidgetFamilySchema;

  private error: Error = new Error('schema isn\'t initialized: use "this.widgetOperationsService.widgetSchema =' +
    ' this.schema" to initialize it');

  set widgetSchema(schema: WidgetFamilySchema) {
    this.schema = schema;
  }

  get widgetSchema() {
    return this.schema;
  }

  checkSchema() {
    if (!this.schema) {
      throw this.error;
    }
  }

  insert() {
    this.checkSchema();
  }

  /*
   * 编辑样式
   */
  editStyle(style: DynamicObject) {
    this.checkSchema();
    console.log(style);
  }

  /*
   * 删除 widget
   */
  delete() {
    this.checkSchema();
  }

  /*
   * 添加事件
   */
  addEvent(eventSchema: EventSchema) {
    this.checkSchema();
    console.log(eventSchema);
  }

  updateEvent() {
    this.checkSchema();
  }

  deleteEvent() {
    this.checkSchema();
  }
}

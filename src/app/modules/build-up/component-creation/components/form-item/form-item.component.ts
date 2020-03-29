import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import BaseFormItem from '@/models/form/base-form-item';

@Component({
  selector: 'byp-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.less'],
})
export class FormItemComponent implements OnInit {

  constructor() {
  }

  get isValid() {
    return this.form.controls[this.formItem.key].valid;
  }

  @Input()
  form: FormGroup;

  @Input()
  formItem: BaseFormItem<any>;

  ngOnInit() {
  }

}

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlService } from '@/services/form-control.service';
import BaseFormItem from '@/models/form/base-form-item';

@Component({
  selector: 'byp-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  providers: [
    FormControlService,
  ]
})
export class FormComponent implements OnInit, OnChanges {

  constructor(
    private formControlService: FormControlService,
  ) {
  }

  form: FormGroup;

  payload: any;

  @Input()
  formItems: BaseFormItem<any>[] = [];

  @Output()
  save: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.form = this.formControlService.toFormGroup(this.formItems);
  }

  handleSubmit() {
    this.payload = JSON.stringify(this.form.getRawValue());
    this.save.emit(this.form.getRawValue());
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.form = this.formControlService.toFormGroup(this.formItems);
  }
}

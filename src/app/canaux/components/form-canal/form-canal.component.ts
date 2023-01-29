import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Canal } from '../../models/canal';

@Component({
  selector: 'app-form-canal',
  templateUrl: './form-canal.component.html',
  styleUrls: ['./form-canal.component.scss'],
})
export class FormCanalComponent implements OnInit {
  @Input() public init!: Canal;
  @Output() public submitted: EventEmitter<Canal>;
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter();
    console.log(this.init);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: [this.init.user],
      name: [this.init.name],
      date: [this.init.date],
      id: [this.init.id],
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.form.value);
  }
}

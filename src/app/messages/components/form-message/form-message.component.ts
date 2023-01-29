import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Message } from '../../models/message';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss'],
})
export class FormMessageComponent implements OnInit {
  @Input() public init!: Message;
  @Output() public submitted: EventEmitter<Message>;
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter();
    console.log(this.init);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      owner: [this.init.owner],
      text: [this.init.text],
      date: [this.init.createdDate],
      idCanal: [this.init.idCanal],
      id: [this.init.id],
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.form.value);
  }
}

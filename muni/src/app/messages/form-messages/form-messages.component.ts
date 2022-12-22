import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'src/app/core/models/message';

@Component({
  selector: 'app-form-messages',
  templateUrl: './form-messages.component.html',
  styleUrls: ['./form-messages.component.scss'],
})
export class FormMessagesComponent {
  @Input() public init!: Message;
  @Output() public submitted: EventEmitter<Message>;
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter<Message>();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: [this.init.content, Validators.required],
      id: [this.init.id],
      postTime: Date.now(),
      user: [this.init.user],
      channel: [this.init.channel],
    });
    console.log(this.form.value);
  }

  public onSubmit(): void {
    this.submitted.emit(this.form.value);
    
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Channel } from 'src/app/core/models/channel';

@Component({
  selector: 'app-form-channel',
  templateUrl: './form-channel.component.html',
  styleUrls: ['./form-channel.component.scss'],
})
export class FormChannelComponent {
  @Input() public init!: Channel;
  @Input() public intitule!: string;
  @Output() public submitted: EventEmitter<Channel>;
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter<Channel>();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.init.name, Validators.required],
    });
  }

  public onSubmit(): void {
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}

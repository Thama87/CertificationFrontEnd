import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Channel } from 'src/app/core/models/channel';
import { Message } from 'src/app/core/models/message';
import { User } from 'src/app/core/models/user';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-form-messages',
  templateUrl: './form-messages.component.html',
  styleUrls: ['./form-messages.component.scss'],
})
export class FormMessagesComponent {
  @Input() public init!: Message;
  @Input() public intitule!: string;
  @Output() public submitted: EventEmitter<Message>;
  public channel$: Observable<Channel[]>;
  public user$: Observable<User[]>;
  public form!: FormGroup;

  constructor(
    private channelsService: ChannelsService,
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.submitted = new EventEmitter<Message>();
    this.channel$ = this.channelsService.collection$;
    this.user$ = this.usersService.collection$;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: [this.init.content, Validators.required],
    });
  }

  public onSubmit(): void {
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}

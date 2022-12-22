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
      id: [this.init.id],
      postTime: [this.init.postTime],
      editTime: [this.init.editTime],
      user: this.formBuilder.group({
        id: [this.init.user.id],
      }),
      channel: this.formBuilder.group({
        id: [this.init.channel.id],
      }),
    });
    console.log(this.init.content);
    console.log(this.init.user);
  }

  addFormGroup(): void {
    this.form = this.formBuilder.group({
      content: [this.init.content, Validators.required],
      id: [this.init.id],
      postTime: Date.now(),
      user: this.formBuilder.group({
        id: [this.init.user.id],
      }),
      channel: this.formBuilder.group({
        id: [this.init.channel.id],
      }),
    });
  }

  putFormGroup(): void {
    this.form = this.formBuilder.group({
      content: [this.init.content, Validators.required],
      id: [this.init.id],
      editTime: Date.now(),
      user: this.formBuilder.group({
        id: [this.init.user.id],
      }),
      channel: this.formBuilder.group({
        id: [this.init.channel.id],
      }),
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.form.value);
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss'],
})
export class PageListMessagesComponent {
  public collection$!: BehaviorSubject<Message[]>;
  public channelMess$!: Observable<Message[]>;
  public message: Message;
  public IdChannel: number;

  constructor(
    private messagesService: MessagesService,
    private router: Router,
    private route: ActivatedRoute,
    private channelsService: ChannelsService
  ) {
    this.IdChannel = this.route.snapshot.params['id'];
    this.channelMess$ = this.messagesService.channelMess$;
    console.log(this.IdChannel);
    this.message = new Message();

    this.collection$ = this.messagesService.collection$;
  }

  public action(message: Message): void {
    this.assignChanToMess(message);
    this.messagesService.add(message).subscribe();
  }

  public assignChanToMess(message: Message): void {
    message.channel = {
      id: 1,
      name: 'general',
    };
    message.user = {
      id: 1,
      name: 'User',
    };
    message.postTime = new Date();

  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss'],
})
export class PageListMessagesComponent {
  public collection$!: BehaviorSubject<Message[]>;
  public message: Message;

  constructor(
    private messagesService: MessagesService,
    private router: Router
  ) {
    this.message = new Message();
    this.collection$ = this.messagesService.collection$;
  }

  public action(message: Message): void {
    this.messagesService.add(message).subscribe(() => {
      this.router.navigate(['messages']);
    });
    console.log(this.message);
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public collection2$!: Observable<Message[]>;
  public message: Message;
  public IdChannel: number;

  constructor(
    private messagesService: MessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.IdChannel = this.route.snapshot.params['id'];
    this.collection2$ = this.messagesService.getByChannel(this.IdChannel);
    console.log(this.IdChannel);
    this.message = new Message();
    this.collection$ = this.messagesService.collection$;
  }

  public action(message: Message): void {
    this.messagesService.add(message).subscribe(() => {
      this.router.navigate(['messages']);
    });
  }

}

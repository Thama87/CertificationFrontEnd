import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-page-edit-message',
  templateUrl: './page-edit-message.component.html',
  styleUrls: ['./page-edit-message.component.scss'],
})
export class PageEditMessageComponent {
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
    this.messagesService.put(message).subscribe(() => {
      this.router.navigate(['messages']);
    });
    console.log(this.message);
  }
}

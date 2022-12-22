import { Component } from '@angular/core';
import { Channel } from '../../models/channel';
import { ChannelsService } from '../../services/channels.service';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public channels!: Channel[];
  constructor(private channelsService: ChannelsService, private messagesService: MessagesService) {
    this.channelsService.collection$.subscribe((data) => {
      //console.log(data);
      this.channels = data;
    });
  }
}

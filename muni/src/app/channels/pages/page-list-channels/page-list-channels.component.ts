import { Component } from '@angular/core';
import { Channel } from 'src/app/core/models/channel';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-page-list-channels',
  templateUrl: './page-list-channels.component.html',
  styleUrls: ['./page-list-channels.component.scss'],
})
export class PageListChannelsComponent {
  public channels!: Channel[];
  constructor(private channelsService: ChannelsService) {
    this.channelsService.collection$.subscribe((data) => {
      console.log(data);
      this.channels = data;
    });
  }

  public action(channel: Channel): void {
    this.channelsService.add(channel).subscribe();
  }
}

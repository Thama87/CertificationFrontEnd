import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Channel } from 'src/app/core/models/channel';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-page-edit-channel',
  templateUrl: './page-edit-channel.component.html',
  styleUrls: ['./page-edit-channel.component.scss']
})
export class PageEditChannelComponent {
  public collection$!: BehaviorSubject<Channel[]>;
  public channel: Channel;

  constructor(
    private channelsService: ChannelsService,
    private router: Router
  ) {
    this.channel = new Channel();
    //this.collection$ = this.channelsService.collection$;
  }

  public action(channel: Channel): void {
    this.channelsService.put(channel).subscribe(() => {
      this.router.navigate(['channel']);
    });
    console.log(this.channel);
  }

}

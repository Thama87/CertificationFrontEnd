import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { PageListChannelsComponent } from './pages/page-list-channels/page-list-channels.component';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';
import { PageEditChannelComponent } from './pages/page-edit-channel/page-edit-channel.component';
import { FormChannelComponent } from './form-channel/form-channel.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListChannelsComponent,
    PageAddChannelComponent,
    PageEditChannelComponent,
    FormChannelComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    SharedModule
  ]
})
export class ChannelsModule { }

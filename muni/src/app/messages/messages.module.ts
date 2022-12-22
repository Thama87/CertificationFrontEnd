import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FormMessagesComponent } from './form-messages/form-messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { PageAddMessageComponent } from './pages/page-add-message/page-add-message.component';
import { PageEditMessageComponent } from './pages/page-edit-message/page-edit-message.component';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';

@NgModule({
  declarations: [
    PageListMessagesComponent,
    PageEditMessageComponent,
    PageAddMessageComponent,
    FormMessagesComponent
  ],
  imports: [CommonModule, MessagesRoutingModule, SharedModule],
  exports: [],
})
export class MessagesModule {}

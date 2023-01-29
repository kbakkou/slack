import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessagesRoutingModule } from '../messages/messages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormMessageComponent } from './components/form-message/form-message.component';
import { PageAddMessageComponent } from './pages/page-add-message/page-add-message.component';
import { PageEditMessageComponent } from './pages/page-edit-message/page-edit-message.component';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';

@NgModule({
  declarations: [
    PageListMessagesComponent,
    PageAddMessageComponent,
    PageEditMessageComponent,
    FormMessageComponent,
  ],
  imports: [CommonModule, MessagesRoutingModule, SharedModule],
})
export class MessagesModule {}

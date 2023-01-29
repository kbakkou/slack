import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-page-add-message',
  templateUrl: './page-add-message.component.html',
  styleUrls: ['./page-add-message.component.scss'],
})
export class PageAddMessageComponent {
  public message: Message;

  constructor(
    private messagesService: MessagesService,
    private router: Router
  ) {
    this.message = new Message();
  }

  public action(message: Message): void {
    this.messagesService.add(message).subscribe(() => {
      this.router.navigate(['messages']);
    });
  }
}

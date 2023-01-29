import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-page-edit-message',
  templateUrl: './page-edit-message.component.html',
  styleUrls: ['./page-edit-message.component.scss'],
})
export class PageEditMessageComponent {
  public message$!: Observable<Message>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private messagesSerivce: MessagesService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      console.log(id);
      this.message$ = this.messagesSerivce.getItemById(id);
    });
  }

  public action(message: Message): void {
    this.messagesSerivce.update(message).subscribe(() => {
      this.router.navigate(['messages']);
    });
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss'],
})
export class PageListMessagesComponent {
  public messages$!: Observable<Message[]>;

  public headers: string[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const idCanal = params['idCanal'];
      console.log(idCanal);
      this.messages$ = this.messagesService.getItemByCanalId(idCanal);
    });
    this.headers = ['Actions', 'text', 'owner', 'date de creation'];
  }

  public goToEdit(id: number): void {
    this.router.navigate(['messages', 'edit', id]);
  }

  public deleteItem(id: number): void {
    this.messagesService.deleteItem(id).subscribe();
  }
}

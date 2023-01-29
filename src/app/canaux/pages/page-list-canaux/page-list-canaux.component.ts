import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Canal } from '../../models/canal';
import { CanauxService } from '../../services/canaux.service';

@Component({
  selector: 'app-page-list-canaux',
  templateUrl: './page-list-canaux.component.html',
  styleUrls: ['./page-list-canaux.component.scss'],
})
export class PageListCanauxComponent {
  public canaux$: BehaviorSubject<Canal[]>;

  public headers: string[];

  constructor(private canauxService: CanauxService, private router: Router) {
    this.canaux$ = this.canauxService.collection$;

    this.headers = ['Actions', 'name', 'user', 'date'];
  }

  public goToEdit(id: number): void {
    this.router.navigate(['canaux', 'edit', id]);
  }

  public deleteItem(id: number): void {
    this.canauxService.deleteItem(id).subscribe();
  }
}

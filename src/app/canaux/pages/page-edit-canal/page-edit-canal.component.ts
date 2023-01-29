import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Canal } from '../../models/canal';
import { CanauxService } from '../../services/canaux.service';

@Component({
  selector: 'app-page-edit-canal',
  templateUrl: './page-edit-canal.component.html',
  styleUrls: ['./page-edit-canal.component.scss'],
})
export class PageEditCanalComponent {
  public canal$!: Observable<Canal>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private canauxSerivce: CanauxService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      console.log(id);
      this.canal$ = this.canauxSerivce.getItemById(id);
    });
  }

  public action(canal: Canal): void {
    this.canauxSerivce.update(canal).subscribe(() => {
      this.router.navigate(['canaux']);
    });
  }
}

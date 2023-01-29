import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Canal } from '../../models/canal';
import { CanauxService } from '../../services/canaux.service';

@Component({
  selector: 'app-page-add-canal',
  templateUrl: './page-add-canal.component.html',
  styleUrls: ['./page-add-canal.component.scss'],
})
export class PageAddCanalComponent {
  public canal: Canal;

  constructor(private canauxService: CanauxService, private router: Router) {
    this.canal = new Canal();
  }

  public action(canal: Canal): void {
    this.canauxService.add(canal).subscribe(() => {
      this.router.navigate(['canaux']);
    });
  }
}

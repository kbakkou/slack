import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Canal } from 'src/app/canaux/models/canal';
import { CanauxService } from 'src/app/canaux/services/canaux.service';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public canaux$: BehaviorSubject<Canal[]>;
  constructor(
    private versionService: VersionService,
    private canauxService: CanauxService
  ) {
    this.canaux$ = this.canauxService.collection$;
  }

  public incrementVersion(): void {
    this.versionService.increment();
  }
}

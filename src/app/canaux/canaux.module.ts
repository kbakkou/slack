import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CanauxRoutingModule } from '../canaux/canaux-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormCanalComponent } from './components/form-canal/form-canal.component';
import { PageAddCanalComponent } from './pages/page-add-canal/page-add-canal.component';
import { PageEditCanalComponent } from './pages/page-edit-canal/page-edit-canal.component';
import { PageListCanauxComponent } from './pages/page-list-canaux/page-list-canaux.component';

@NgModule({
  declarations: [
    PageListCanauxComponent,
    PageAddCanalComponent,
    PageEditCanalComponent,
    FormCanalComponent,
  ],
  imports: [CommonModule, CanauxRoutingModule, SharedModule],
})
export class CanauxModule {}

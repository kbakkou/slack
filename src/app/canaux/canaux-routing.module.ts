import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddCanalComponent } from './pages/page-add-canal/page-add-canal.component';
import { PageEditCanalComponent } from './pages/page-edit-canal/page-edit-canal.component';
import { PageListCanauxComponent } from './pages/page-list-canaux/page-list-canaux.component';

const routes: Routes = [
  { path: '', component: PageListCanauxComponent },
  { path: 'add', component: PageAddCanalComponent },
  { path: 'edit/:id', component: PageEditCanalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanauxRoutingModule {}

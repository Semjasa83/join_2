import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { SummaryComponent } from './summary/summary.component';
import { BoardComponent } from './board/board.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: 'summary', component: SummaryComponent },
  { path: 'addtask', component:  AddtaskComponent },
  { path: 'board', component:  BoardComponent },
  { path: 'contacts', component: ContactsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

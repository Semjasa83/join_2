import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { SummaryComponent } from './summary/summary.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'addtask', component:  AddtaskComponent },
  { path: 'board', component:  BoardComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

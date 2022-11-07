import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { BoardComponent } from './board/board.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { TaskAddRouterComponent } from './task-add-router/task-add-router.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';


const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'prefix' },
      { path: 'summary', component: SummaryComponent },
      { path: 'board', component:  BoardComponent },
      { path: 'contacts', component: ContactsComponent,
        children: [
          { path: '',   redirectTo: 'contacts', pathMatch: 'full' },
          { path: 'contactdetail/:id', component: ContactDetailComponent}
        ]},
      { path: 'addtask', component: TaskAddRouterComponent}
    ]
  },
  { path: '**', redirectTo: 'login' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SummaryComponent } from './summary/summary.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsComponent } from './contacts/contacts.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ContactAddDialogComponent } from './contact-add-dialog/contact-add-dialog.component';
import { TaskAddDialogComponent } from './task-add-dialog/task-add-dialog.component';
import { TaskAddRouterComponent } from './task-add-router/task-add-router.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditDialogComponent } from './contact-edit-dialog/contact-edit-dialog.component';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { ContactDeleteDialogComponent } from './contact-delete-dialog/contact-delete-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    SidenavComponent,
    HeaderbarComponent,
    LoginComponent,
    BoardComponent,
    MainComponent,
    ContactsComponent,
    ContactAddDialogComponent,
    TaskAddDialogComponent,
    TaskAddRouterComponent,
    ContactDetailComponent,
    ContactEditDialogComponent,
    ContactDeleteDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

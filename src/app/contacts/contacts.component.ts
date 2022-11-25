import { Component, Input, OnInit, Output, } from '@angular/core';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ContactAddDialogComponent } from '../contact-add-dialog/contact-add-dialog.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  allContacts$!: Observable<any>;
  allContacts: any = [];

  constructor(private firestore: Firestore, public client: ClientService, public route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.allContacts$ = this.client.getAllContacts();
    this.allContacts$.subscribe(contactsData => {
      // console.log(contactsData);
      this.allContacts = contactsData;
    } )
  }

  openDialog() {
    this.dialog.open(ContactAddDialogComponent);
  }

  openContact(contact: any) {
    this.client.selectedContact = contact;
    this.client.contactLoaded = true;
    // console.log('contact-comp', this.client.selectedContact);
  }

}

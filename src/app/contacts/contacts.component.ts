import { Component, Input, OnInit, Output, } from '@angular/core';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ContactAddDialogComponent } from '../contact-add-dialog/contact-add-dialog.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  allContacts$!: Observable<any>;
  allContacts: any = [];
  sortedContacts: any = [];
  selectedContact: any;

  constructor(private firestore: Firestore, public client: ClientService, public route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.allContacts$ = this.client.getAllContacts();
    this.allContacts$.subscribe(contactsData => {
      console.log(contactsData);
      this.allContacts = contactsData;
    } )
  }

  openDialog() {
    this.dialog.open(ContactAddDialogComponent);
  }

  openContact(contact: any) {
    this.selectedContact = contact;
    console.log(this.selectedContact);
  }

}

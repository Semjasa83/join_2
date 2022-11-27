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
  sortIndexLetter: any = [];

  constructor(private firestore: Firestore, public client: ClientService, public route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.allContacts$ = this.client.getAllContacts();
    this.allContacts$.subscribe(contactsData => {
      this.allContacts = contactsData;
            // console.log('allcontacts', this.allContacts);
            this.letterLoop();
    } )
  }

  openDialog() {
    this.dialog.open(ContactAddDialogComponent);
  }

  openContact(contact: any) {
    this.client.selectedContact = contact;
    this.client.contactLoaded = true;
  }

  letterLoop() {
    for (let i = 0; i < this.allContacts.length; i++) {
      let alphabet = this.allContacts[i].shortTag.charAt(0);
      this.sortIndexLetter.push(alphabet);
    }
    console.log('arrayAlpha', this.sortIndexLetter);
  }

}

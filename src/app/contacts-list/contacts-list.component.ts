import { Component, Input, OnInit } from '@angular/core';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  allContacts$!: Observable<any>;
  allContacts: any = [];
  selectedContact: any;

  constructor(private firestore: Firestore, public client: ClientService, public route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.allContacts$ = this.client.getAllContacts();
    this.allContacts$.subscribe(contactsData => {
      console.log(contactsData);
      this.allContacts = contactsData;
    } )
  }

  openContact(contact: any) {
    this.selectedContact = contact;
  }
}

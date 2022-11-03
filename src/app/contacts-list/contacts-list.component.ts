import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Contact } from 'src/models/contact.class';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contact = new Contact();
  allContacts$: Observable<any>; //QA
  allContacts: any = [];

  constructor(private firestore: Firestore, private client: ClientService) {

    const coll = collection(firestore, 'contacts');
    this.allContacts$ = collectionData(coll, {idField: "id"}); // { - direkt zugriff in der Sammlung}

    this.allContacts$.subscribe((changes: any) => {
      //console.log('received changes;', changes); //_____CONSOLE
      this.allContacts = changes.map((contact : any) => new Contact(contact));
      //console.log('allContacts: ', this.allContacts ); //ID wie ins JSON übertragen
    });
  }

  ngOnInit(): void {
  }
}

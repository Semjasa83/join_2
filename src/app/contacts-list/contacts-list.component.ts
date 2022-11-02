import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Contact } from 'src/models/contact.class';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contact = new Contact();
  allContacts$: Observable<any>;
  allContacts: any = [];

  constructor(private firestore: Firestore) {
    
    const coll = collection(firestore, 'contacts');
    this.allContacts$ = collectionData(coll, {idField: "contactId"});

    this.allContacts$.subscribe((changes: any) => {
      console.log('received changes;', changes);
      this.allContacts = changes;
      console.log('allContacts: ', this.allContacts );
    })
  }




  ngOnInit(): void {
  }
}

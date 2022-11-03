
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/models/contact.class';

interface Pokemon {
  height: number;
  id: string;
  description: string;
  imgUrl: string;
  name: string;
  type: string;
  weight: number;
}
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private contactsCollection: CollectionReference<DocumentData>;

    contact = new Contact();
    allContacts$: Observable<any>; //QA
    allContacts: any = [];

  constructor(public readonly firestore: Firestore) {
    // this.sortedCollection = query(this.tasksCollection, orderBy('dueDate.timestamp', 'asc'));
    this.contactsCollection = collection(firestore, 'contacts');

    //const coll = collection(firestore, 'contacts');
    this.allContacts$ = collectionData(this.contactsCollection, {idField: "id"}); // { - direkt zugriff in der Sammlung}

    this.allContacts$.subscribe((changes: any) => {
      //console.log('received changes;', changes); //_____CONSOLE
      this.allContacts = changes.map((contact : any) => new Contact(contact));
      //console.log('allContacts: ', this.allContacts ); //ID wie ins JSON übertragen
    });
  }

  getAllContacts() {
    return collectionData(this.contactsCollection, { idField: 'id' }) as Observable<any>;
  }

  getContact(id: string) {
    const taskRef = doc(this.firestore, `contacts/${id}`);
    return docData(taskRef, { idField: 'id' });
  }

  createContact(contact: any) {
    return addDoc(this.contactsCollection, contact);
  }

  updateContact(contact: any) {
    const taskRef = doc(this.firestore, `contacts/${contact.id}`);
    return updateDoc(taskRef, { ...contact });
  }

  deleteContact(id: string) {
    const taskRef = doc(this.firestore, `contacts/${id}`);
    return deleteDoc(taskRef);
  }
}
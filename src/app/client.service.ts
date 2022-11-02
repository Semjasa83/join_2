
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

  constructor(private readonly firestore: Firestore) {
    this.contactsCollection = collection(this.firestore, 'contacts');
  }

  getAllContacts() {
    return collectionData(this.contactsCollection, {
      idField: 'id',
    }) as Observable<Contact[]>;
  }

  getContact(id: string) {
    const contactRef = doc(this.firestore, `contacts/${id}`);
    return docData(contactRef, { idField: 'id' });
  }
}
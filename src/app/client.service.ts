
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  Query, query,
  orderBy,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/models/contact.class';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  selectedContact: any;


  private contactsCollection: CollectionReference<DocumentData>;
  private sortedContacts: Query<DocumentData>;

  constructor(public readonly firestore: Firestore) {

    this.contactsCollection = collection(firestore, 'contacts');
    this.sortedContacts = query(this.contactsCollection, orderBy('firstName', 'asc'));
  }

  getAllContacts() {
    return collectionData(this.sortedContacts, {idField: 'id',}) as Observable<any>;
  }

  getContact(id: string) {
    const contactsDocumentReference = doc(this.firestore, `contacts/${id}`);
    return docData(contactsDocumentReference, { idField: 'id' });
  }

  createContact(contact: Contact) {
    return addDoc(this.contactsCollection, contact);
  }

  updateContact(contact: Contact) {
    const contactsDocumentReference = doc(this.firestore, `contacts/${contact.id}`);
    return updateDoc(contactsDocumentReference, { ...contact });
  }

  deleteContact(id: string) {
    const contactsDocumentReference = doc(this.firestore, `contacts/${id}`);
    return deleteDoc(contactsDocumentReference);
  }

}
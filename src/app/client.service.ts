
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


  constructor(public readonly firestore: Firestore) {

    this.contactsCollection = collection(this.firestore, 'contacts');
  }

  getAllContacts() {
    return collectionData(this.contactsCollection, {idField: 'id',}) as Observable<Pokemon[]>;
  }

  getContact(id: string) {
    const contactsDocumentReference = doc(this.firestore, `contacts/${id}`);
    return docData(contactsDocumentReference, { idField: 'id' });
  }

  createContact(pokemon: Pokemon) {
    return addDoc(this.contactsCollection, pokemon);
  }

  updateContact(pokemon: Pokemon) {
    const contactsDocumentReference = doc(this.firestore, `contacts/${pokemon.id}`);
    return updateDoc(contactsDocumentReference, { ...pokemon });
  }

  deleteContact(id: string) {
    const contactsDocumentReference = doc(this.firestore, `contacts/${id}`);
    return deleteDoc(contactsDocumentReference);
  }

}
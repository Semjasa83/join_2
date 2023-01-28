
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
import { Task } from 'src/models/task.class';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  selectedContact: any;
  contactLoaded: boolean = false;

  private contactsCollection: CollectionReference<DocumentData>;
  private sortedContacts: Query<DocumentData>;

  private tasksCollection: CollectionReference<DocumentData>;
  private sortedTasks: Query<DocumentData>;

  constructor(public readonly firestore: Firestore) {

    this.contactsCollection = collection(firestore, 'contacts');
    this.sortedContacts = query(this.contactsCollection, orderBy('firstName', 'asc'));

    this.tasksCollection = collection(firestore, 'tasks');
    this.sortedTasks = query(this.tasksCollection);
  }

  getAllContacts() {
    return collectionData(this.sortedContacts, {idField: 'id',}) as Observable<any>;
  }

  getAllTasks() {
    return collectionData(this.sortedTasks, {idField: 'id',}) as Observable<any>;
  }


  getContact(id: string) {
    const contactsDocumentReference = doc(this.firestore, `contacts/${id}`);
    return docData(contactsDocumentReference, { idField: 'id' });
  }

  getTask(id: string){
    const tasksDocumentReference = doc(this.firestore, `tasks/${id}`);
    return docData(tasksDocumentReference, { idField: 'id' });
  }


  createContact(contact: Contact) {
    return addDoc(this.contactsCollection, contact);
  }

  createTask(task: Task) {
    return addDoc(this.tasksCollection, task);
  }


  updateContact(contact: Contact) {
    const contactsDocumentReference = doc(this.firestore, `contacts/${contact.id}`);
    return updateDoc(contactsDocumentReference, { ...contact });
  }

  updateTask(task: Task) {
    const tasksDocumentReference = doc(this.firestore, `tasks/${task.id}`);
    return updateDoc(tasksDocumentReference, { ...task });
  }


  deleteContact(id: string) {
    const contactsDocumentReference = doc(this.firestore, `contacts/${id}`);
    return deleteDoc(contactsDocumentReference);
  }

  deleteTask(id: string) {
    const tasksDocumentReference = doc(this.firestore, `tasks/${id}`);
    return deleteDoc(tasksDocumentReference);
  }
}
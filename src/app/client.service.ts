
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
import { Task } from 'src/models/task.class';

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

  public contactsCollection: CollectionReference<DocumentData>;

  contact = new Contact();
  allContacts$: Observable<any>; //QA
  allContacts: any = [];
  
  // task = new Task();
  // allTasks$: Observable<any>;
  // allTasks: any = [];

  constructor(public readonly firestore: Firestore) {

    // this.sortedCollection = query(this.tasksCollection, orderBy('dueDate.timestamp', 'asc'));

    // this.tasksCollection = collection(firestore, 'tasks');
    this.contactsCollection = collection(firestore, 'contacts');

    //push all contacts into JSON
    this.allContacts$ = this.getAllContacts(); // { - direkt zugriff in der Sammlung}
    this.subscribeAllContacts();
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

  subscribeAllContacts() {
    this.allContacts$.subscribe((contactChanges: any) => {
      this.allContacts = contactChanges.map((contact: any) => new Contact(contact));
      console.log(contactChanges);
    });
  }

  // subcribeAllTasks() {
  //   this.allTasks$.subscribe((tasksChanges: any) => {
  //     this.allTasks = tasksChanges.map((task: any ) => new Task(task));
  //     console.log(tasksChanges);
  //   });
  // }
}
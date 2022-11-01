import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.class';
import { collection, addDoc } from "firebase/firestore"; 
import { Firestore, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-contacts-dialog',
  templateUrl: './contacts-dialog.component.html',
  styleUrls: ['./contacts-dialog.component.scss']
})
export class ContactsDialogComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
  }

  async saveContact() {
    console.log('contact', this.contact);
    const coll = collection(this.firestore, "contacts");
    await addDoc (coll, this.contact.toJSON());
  }
}

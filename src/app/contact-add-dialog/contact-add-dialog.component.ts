import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.class';
import { addDoc } from "firebase/firestore"; 
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-contact-add-dialog',
  templateUrl: './contact-add-dialog.component.html',
  styleUrls: ['./contact-add-dialog.component.scss']
})
export class ContactAddDialogComponent implements OnInit {

  contact: Contact = new Contact();
  shortTag: string = '';

  constructor( private firestore: Firestore, public client: ClientService) { }

  ngOnInit(): void {
  }

  async saveContact() {
    this.contact.shortTag = this.getContactTag();
    const coll = collection(this.firestore, "contacts");
    await addDoc (coll, this.contact.toJSON());
  }

  getContactTag() {
    let firstLetter = this.contact.firstName.charAt(0).toUpperCase();
    let secondLetter = this.contact.lastName.charAt(0).toUpperCase();
    let shortTag = firstLetter + secondLetter;
    return shortTag; 
  }
}

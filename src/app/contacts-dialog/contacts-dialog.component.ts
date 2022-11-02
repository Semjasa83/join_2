import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.class';
// import { addDoc } from "firebase/firestore"; 
import { Firestore, collectionData, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-contacts-dialog',
  templateUrl: './contacts-dialog.component.html',
  styleUrls: ['./contacts-dialog.component.scss']
})
export class ContactsDialogComponent implements OnInit {

  contact: Contact = new Contact();
  shortTag: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // async saveContact() {
  //   this.getContactTag();
  //   console.log('contact', this.contact);
  //   const coll = collection(this.firestore, "contacts");
  //   await addDoc (coll, this.contact.toJSON());
  // }



  getContactTag() {
    let firstLetter = this.contact.firstName.charAt(0).toUpperCase();
    let secondLetter = this.contact.lastName.charAt(0).toUpperCase();
    let shortTag = firstLetter + secondLetter;
    console.log(shortTag);
    this.contact.shortTag;
  }
}

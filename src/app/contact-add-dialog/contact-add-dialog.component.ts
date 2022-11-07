import { Component, Injector, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/models/contact.class';
import { addDoc } from "firebase/firestore"; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-add-dialog',
  templateUrl: './contact-add-dialog.component.html',
  styleUrls: ['./contact-add-dialog.component.scss']
})
export class ContactAddDialogComponent implements OnInit {


  contact: Contact = new Contact();
  shortTag: string = '';
  contactJson: any;

  constructor( private firestore: Firestore, public client: ClientService) { }

  ngOnInit(): void {

  }

  saveContact() {
    console.log(this.contact.toJSON());
    this.contactJson = this.contact.toJSON();
    this.client.createContact(this.contactJson);
  }

  // async saveContact() {
  //   this.contact.shortTag = this.getContactTag();
  //   const coll = collection(this.firestore, "contacts");
  //   await addDoc (coll, this.contact.toJSON());
  // }

  getContactTag() {
    let firstLetter = this.contact.firstName.charAt(0).toUpperCase();
    let secondLetter = this.contact.lastName.charAt(0).toUpperCase();
    let shortTag = firstLetter + secondLetter;
    return shortTag; 
  }

  // setContactForm() {
  //   this.newContact = new FormGroup({
  //     firstName: [this.contact.firstName, [Validators.required]],
  //     lastName: [this.contact.lastName, [Validators.required]],
  //     email: [this.contact.email, [Validators.required]],
  //     phone: [this.contact.phone, [Validators.required]],
  //   });
  // }
}

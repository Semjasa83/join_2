import { Component, Injector, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
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
    this.contact.color = this.getRandomColor();
    this.contact.shortTag = this.getContactTag();
    console.log(this.contact.toJSON());
    this.contactJson = this.contact.toJSON();
    this.client.createContact(this.contactJson);
  }

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
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  }
}

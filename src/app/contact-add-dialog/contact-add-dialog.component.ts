import { Component, Injector, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/models/contact.class';
import { addDoc } from "firebase/firestore";
import { Observable } from 'rxjs';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-contact-add-dialog',
  templateUrl: './contact-add-dialog.component.html',
  styleUrls: ['./contact-add-dialog.component.scss']
})
export class ContactAddDialogComponent implements OnInit {

  contact: Contact = new Contact();
  shortTag: string = '';
  contactJson: any;

  constructor( private firestore: Firestore, public client: ClientService, private formbuilder: FormBuilder) { }

  contactForm: FormGroup = this.formbuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.contact.email = this.contactForm.controls['email'].value;
    this.contact.firstName = this.contactForm.controls['firstName'].value;
    this.contact.lastName = this.contactForm.controls['lastName'].value;
    this.contact.phone = this.contactForm.controls['phone'].value;
    console.log(this.contact.firstName);
    this.saveContact();
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

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters ;
    }
    //console.log(color);
    return color;
  }
}

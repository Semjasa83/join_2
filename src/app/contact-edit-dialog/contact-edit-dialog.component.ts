import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-edit-dialog',
  templateUrl: './contact-edit-dialog.component.html',
  styleUrls: ['./contact-edit-dialog.component.scss']
})
export class ContactEditDialogComponent implements OnInit {

  contactEdit: any;

  constructor(private firestore: Firestore, public client: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  changeContactData() {
    this.client.selectedContact.shortTag = this.getEditContactTag();
    this.contactEdit = this.client.selectedContact;
    this.client.updateContact(this.contactEdit);
  }

  getEditContactTag() {
    let firstLetter = this.client.selectedContact.firstName.charAt(0).toUpperCase();
    let secondLetter = this.client.selectedContact.lastName.charAt(0).toUpperCase();
    let shortTag = firstLetter + secondLetter;
    return shortTag; 
  }
}

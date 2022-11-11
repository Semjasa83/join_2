import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/models/contact.class';

@Component({
  selector: 'app-contact-edit-dialog',
  templateUrl: './contact-edit-dialog.component.html',
  styleUrls: ['./contact-edit-dialog.component.scss']
})
export class ContactEditDialogComponent implements OnInit {

  contactEdit: any;
  contactEditJson: any;

  constructor(private firestore: Firestore, public client: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  changeContactData() {
    this.contactEdit = this.client.selectedContact;
    this.client.updateContact(this.contactEdit);
    console.log('update',this.contactEdit);
  }
}

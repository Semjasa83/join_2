import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-contact-delete-dialog',
  templateUrl: './contact-delete-dialog.component.html',
  styleUrls: ['./contact-delete-dialog.component.scss']
})
export class ContactDeleteDialogComponent implements OnInit {

  deleteContact: any;

  constructor (private firestore: Firestore, public client: ClientService,) { }

  ngOnInit(): void {
  }

  removeContact() {
    this.client.deleteContact(this.client.selectedContact.id);
  }
}

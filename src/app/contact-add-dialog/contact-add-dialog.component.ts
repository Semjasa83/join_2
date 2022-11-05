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

  constructor( private firestore: Firestore, public client: ClientService) { }

  ngOnInit(): void {
  }


}

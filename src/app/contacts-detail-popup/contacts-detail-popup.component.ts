import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Contact } from 'src/models/contact.class';
import { ClientService } from '../client.service';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';


@Component({
  selector: 'app-contacts-detail-popup',
  templateUrl: './contacts-detail-popup.component.html',
  styleUrls: ['./contacts-detail-popup.component.scss']
})
export class ContactsDetailPopupComponent implements OnInit {

  constructor(private firestore: Firestore, private client: ClientService, private contactlist: ContactsListComponent ) { }

  ngOnInit(): void {
    this.checkData();
  }

  async checkData() {
  await console.log(this.contactlist.contact.firstName)
  }

}

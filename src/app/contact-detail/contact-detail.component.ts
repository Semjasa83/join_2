import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/models/contact.class';
import { ClientService } from '../client.service';
import { ContactsComponent } from '../contacts/contacts.component';



@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  @Input() item: any;

  constructor(private client: ClientService, private sortContact: ContactsComponent) { }

  ngOnInit(): void {
    this.loadContact;
  }

  loadContact() {
    console.log('test', this.item);
  }
}

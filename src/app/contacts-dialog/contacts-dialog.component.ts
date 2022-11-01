import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.class';

@Component({
  selector: 'app-contacts-dialog',
  templateUrl: './contacts-dialog.component.html',
  styleUrls: ['./contacts-dialog.component.scss']
})
export class ContactsDialogComponent implements OnInit {

  contact: Contact = new Contact();

  constructor() { }

  ngOnInit(): void {
  }

}

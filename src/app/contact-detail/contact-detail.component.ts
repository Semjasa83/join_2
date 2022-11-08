import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  changes!: any;

  constructor(public client: ClientService) { }

  ngOnInit(): void {
    this.loadContact();
  }

  loadContact() {
    this.changes = this.client.selectedContact;
    console.log('changes', this.changes);
  }
}

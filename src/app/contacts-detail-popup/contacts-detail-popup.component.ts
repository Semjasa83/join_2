import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.class';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts-detail-popup',
  templateUrl: './contacts-detail-popup.component.html',
  styleUrls: ['./contacts-detail-popup.component.scss']
})
export class ContactsDetailPopupComponent implements OnInit {

  oneContact: any;

  constructor(public client: ClientService, private activeroute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }


}

import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  constructor(public client: ClientService) { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  constructor(public client: ClientService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap) => {
      const contactId = paramMap.get('id');
      this.client.getContact(contactId as string)
      .subscribe(contact => this.client.selectedContact = contact );
    })
  }

}

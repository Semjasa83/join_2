import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

    constructor(private firestore: Firestore, public client: ClientService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

  }

}

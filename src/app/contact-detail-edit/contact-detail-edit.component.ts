import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from '../client.service';
import { ContactAddDialogComponent } from '../contact-add-dialog/contact-add-dialog.component';

@Component({
  selector: 'app-contact-detail-edit',
  templateUrl: './contact-detail-edit.component.html',
  styleUrls: ['./contact-detail-edit.component.scss']
})
export class ContactDetailEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openDialog() {

  }
}

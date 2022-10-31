import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactsDialogComponent } from '../contacts-dialog/contacts-dialog.component';



@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss']
})
export class ContactsDetailComponent implements OnInit {

  constructor(public dialog: MatDialog) { 

  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ContactsDialogComponent);
  }
}

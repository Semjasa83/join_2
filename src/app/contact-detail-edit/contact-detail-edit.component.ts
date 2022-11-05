import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactAddDialogComponent } from '../contact-add-dialog/contact-add-dialog.component';

@Component({
  selector: 'app-contact-detail-edit',
  templateUrl: './contact-detail-edit.component.html',
  styleUrls: ['./contact-detail-edit.component.scss']
})
export class ContactDetailEditComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ContactAddDialogComponent);
  }
}

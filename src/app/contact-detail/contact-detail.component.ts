import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ContactEditDialogComponent } from '../contact-edit-dialog/contact-edit-dialog.component';
import { ContactDeleteDialogComponent } from '../contact-delete-dialog/contact-delete-dialog.component';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
 
  constructor(public client: ClientService, private route: ActivatedRoute, public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  openEditDialog() {
    this.dialog.open(ContactEditDialogComponent);
  }

  openDeleteDialog() {
    this.dialog.open(ContactDeleteDialogComponent);
  }
}

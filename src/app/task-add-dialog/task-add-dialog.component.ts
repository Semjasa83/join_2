import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ClientService } from '../client.service';
import { Task} from 'src/models/task.class';

@Component({
  selector: 'app-task-add-dialog',
  templateUrl: './task-add-dialog.component.html',
  styleUrls: ['./task-add-dialog.component.scss']
})
export class TaskAddDialogComponent implements OnInit {

  task: Task = new Task();

  constructor(private firestore: Firestore, public client: ClientService) { }

  ngOnInit(): void {
  }

}

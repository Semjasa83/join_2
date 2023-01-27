import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ClientService } from '../client.service';
import { Task} from 'src/models/task.class';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-task-add-dialog',
  templateUrl: './task-add-dialog.component.html',
  styleUrls: ['./task-add-dialog.component.scss']
})
export class TaskAddDialogComponent implements OnInit {

  task: Task = new Task();
  setUrgent: boolean = false;
  setMedium: boolean = false;
  setLow: boolean = false;
  priority: string ='';

  constructor(private firestore: Firestore, public client: ClientService, private formbuilder: FormBuilder) { }

  taskForm: FormGroup = this.formbuilder.group({
    taskTitle: ['', [Validators.required]],
    taskDescription: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.task.taskTitle = this.taskForm.controls['taskTitle'].value;
    this.task.taskDescription = this.taskForm.controls['taskDescription'].value;
    this.task.date = this.taskForm.controls['date'].value;
    console.log(this.task.taskTitle);
    //this.saveContact();
  }

  setPriority(prio: string) {
    this.priority = prio;
    console.log(this.priority);
  }
}

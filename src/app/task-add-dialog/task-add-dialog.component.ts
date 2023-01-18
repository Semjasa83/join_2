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

  constructor(private firestore: Firestore, public client: ClientService, private formbuilder: FormBuilder) { }

  taskForm: FormGroup = this.formbuilder.group({
    title: ['', [Validators.required]],
    describtion: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.task.title = this.taskForm.controls['title'].value;
    this.task.description = this.taskForm.controls['description'].value;
    this.task.date = this.taskForm.controls['date'].value;
    console.log(this.task.title);
    //this.saveContact();
  }

}

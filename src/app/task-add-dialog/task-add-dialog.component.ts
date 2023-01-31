import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ClientService } from '../client.service';
import { Task } from 'src/models/task.class';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-task-add-dialog',
  templateUrl: './task-add-dialog.component.html',
  styleUrls: ['./task-add-dialog.component.scss']
})
export class TaskAddDialogComponent implements OnInit {

  task: Task = new Task();
  taskJson: any;
  setUrgent: boolean = false;
  setMedium: boolean = false;
  setLow: boolean = false;
  priority: string = '';

  constructor(private firestore: Firestore, public client: ClientService, private formbuilder: FormBuilder) { }

  taskForm: FormGroup = this.formbuilder.group({
    taskTitle: ['', [Validators.required]],
    taskDescription: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.task.taskTitle = this.taskForm.controls['taskTitle'].value;
      this.task.taskDescription = this.taskForm.controls['taskDescription'].value;
      this.task.date = this.taskForm.controls['date'].value;
      this.task.prio = this.priority;
      console.log("submit");
      this.saveTask();
    }
  }

  setPriority(priority: string) {
    this.priority = priority;
    console.log(this.priority);
  }

  saveTask() {
    //console.log("tasktoJSON",this.task.toJSON());
    console.log('aktueller status prio', this.task.prio);
    //this.taskJson = this.task.toJSON();
    //this.client.createTask(this.taskJson);
  }

  resetFormTask() {
    !this.setUrgent;
    !this.setMedium;
    !this.setLow;
    this.taskForm.reset();
  }
}

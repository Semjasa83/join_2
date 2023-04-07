import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ClientService } from '../client.service';
import { Task } from 'src/models/task.class';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { Observable } from 'rxjs';


interface Category {
  value: string;
  viewValue: string;
}
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
  category: string = '';
  assignedContact: string = '';

  allContacts$!: Observable<any>;
  allContacts: any = [];

  categories: Category[] = [
    {value: 'FrontEnd', viewValue: 'FrontEnd'},
    {value: 'BackEnd', viewValue: 'BackEnd'},
    {value: 'UX/UI', viewValue: 'UX/UI'},
    {value: 'Testing', viewValue: 'Testing'},
    {value: 'others', viewValue: 'others'},
  ];

  constructor(private firestore: Firestore, public client: ClientService, private formbuilder: FormBuilder) { }

  taskForm: FormGroup = this.formbuilder.group({
    taskTitle: ['', [Validators.required]],
    taskDescription: ['', [Validators.required]],
    date: ['', [Validators.required]],
    category: [''],
    assignedTo: [''],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.task.taskTitle = this.taskForm.controls['taskTitle'].value;
      this.task.taskDescription = this.taskForm.controls['taskDescription'].value;
      this.task.date = this.taskForm.controls['date'].value;
      this.task.category = this.category;
      this.task.priority = this.priority;
      console.log("submit");
      this.saveTask();
    }
  }

  setCategory(category: string) {
    this.category = category;
    console.log(this.category);
  }

  setPriority(priority: string) {
    this.priority = priority;
    console.log(this.priority);
  }

  saveTask() {
    //console.log("tasktoJSON",this.task.toJSON());
    console.log('aktueller status prio', this.task.priority);
    this.taskJson = this.task.toJSON();
    this.client.createTask(this.taskJson);
    this.clearTaskForm();
  }

  resetFormTask() {
    !this.setUrgent;
    !this.setMedium;
    !this.setLow;
    this.taskForm.reset();
  }

  loadContacts() {
    this.allContacts$ = this.client.getAllContacts();
    this.allContacts$.subscribe(contactsData => {
      this.allContacts = contactsData;
    console.log("function called selectContacts", this.allContacts)
  })
  }

  clearTaskForm() {
    this.taskForm.reset();
    this.priority = 'null';
  }
}

import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ClientService } from '../client.service';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  allTasks$!: Observable<any>;
  allTasks: any = [];

  constructor(private firestore: Firestore, public client: ClientService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.allTasks$ = this.client.getAllTasks();
    this.allTasks$.subscribe(tasksData => {
      this.allTasks = tasksData;
    console.log("function called allTasks", this.allTasks)
  })
  }
}

import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc } from "firebase/firestore";



@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    // this.getContacts();
  }

  // async getContacts() {

  //   const docRef = doc(this.firestore, 'contacts', '');
  //   const docSnap = await getDoc(docRef);
    
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }
}
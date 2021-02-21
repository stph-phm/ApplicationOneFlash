import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import {
  FirebaseService
} from '../services/firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

@Output() isLogout = new EventEmitter()

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.firebaseService.logOut()
    this.isLogout.emit(null)
  }

}

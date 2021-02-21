import { Component, OnInit} from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Application exercice de recrutement';
  storedTheme: string = localStorage.getItem('theme-color');
  isSignedIn = false


  constructor(public firebaseService: FirebaseService) {
   }
   
  ngOnInit(){
    if(localStorage.getItem('user') !== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  async onSignUp(email: string, password:string) {
    await this.firebaseService.signUp(email, password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

    async onSignIn(email: string, password:string) {
    await this.firebaseService.signIn(email, password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogOut (){
    this.isSignedIn = false

  }

  setTheme(theme){
    localStorage.setItem('.theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color'); 
  }
}


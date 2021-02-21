import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  Component,
  HostBinding
} from '@angular/core';

import {
  AppComponent
} from './app.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import {
  AngularFireModule
} from '@angular/fire';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
    AngularFireModule.initilizeApp({

      apiKey: "AIzaSyC7AVYFr3J-crlf21_S3S5rYPLUNm73tOA",
      authDomain: "apponeflash.firebaseapp.com",
      projectId: "apponeflash",
      storageBucket: "apponeflash.appspot.com",
      messagingSenderId: "771887260289",
      appId: "1:771887260289:web:ff268f571a771e95896380"
    });
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}

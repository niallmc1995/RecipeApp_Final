import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyBKldifMz7O7X8oPaVZrMvTYA31y7YvONg',
      authDomain: 'my-firebase-test-982ac.firebaseapp.com',
      databaseURL: 'https://my-firebase-test-982ac.firebaseio.com',
      projectId: 'my-firebase-test-982ac',
      storageBucket: 'my-firebase-test-982ac.appspot.com',
      messagingSenderId: '606037919278'
    };
    firebase.initializeApp(firebaseConfig);
  }
}

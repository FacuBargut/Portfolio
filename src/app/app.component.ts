import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facubargutCV';
  // declare var require: any
  // const FileSaver = require('file-saver');

  constructor(private http: HttpClient){

  }


  downloadCV() {
    var FileSaver = require('file-saver');
    FileSaver.saveAs('../assets/files/Facundo-BargutCV.pdf', "Facundo-BargutCV.pdf");
  }

}


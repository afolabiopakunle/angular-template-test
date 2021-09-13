import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('myForm') signUpForm: NgForm;

  defaultSchool: string = 'loyola';

  onSubmit() {
    console.log(this.signUpForm.controls)
  }
}

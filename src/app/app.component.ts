import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
      First: <input name="first" ngModel required #first="ngModel">
      <br>
      Last: <input name="last" ngModel #last="ngModel">
      <button>Submit</button>
    </form>

    <p>First name value: {{ first.value }}</p>
    <p>Last name valid: {{ last.value }}</p>
    <p>Form value: {{ f.value | json }}</p>
    <p>Form valid: {{ f.valid }}</p>
  `,
})
export class AppComponent {
  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false
  }
}

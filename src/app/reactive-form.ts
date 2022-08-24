import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'reactive-form',
  template: `
  <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">

    <label for="first-name">First Name: </label>
    <input id="first-name" type="text" formControlName="firstName">
    <br>
    <label for="last-name">Last Name: </label>
    <input id="last-name" type="text" formControlName="lastName">
    <br>
    <div formGroupName="address">
      <h2>Address</h2>

      <label for="street">Street: </label>
      <input id="street" type="text" formControlName="street">
      <br>

      <label for="city">City: </label>
      <input id="city" type="text" formControlName="city">
      <br>

      <label for="state">State: </label>
      <input id="state" type="text" formControlName="state">
      <br>

      <label for="zip">Zip Code: </label>
      <input id="zip" type="text" formControlName="zip">
    </div>
    <div formArrayName="aliases">
      <h2>Aliases</h2>
      <button type="button" (click)="addAlias()">+ Add another alias</button>
    
      <div *ngFor="let alias of aliases.controls; let i=index">
        <!-- The repeated alias template -->
        <label for="alias-{{ i }}">Alias:</label>
        <input id="alias-{{ i }}" type="text" [formControlName]="i">
      </div>
    </div>
  
  <button type="submit" [disabled]="!profileForm.valid">Submit</button>
  <p>Form Status: {{ profileForm.status }}</p>
  <p>Form Value: {{ profileForm.value | json }}</p>

</form>
  `,
})
export class ReactiveForm {
  constructor(private fb: FormBuilder) {}
  get aliases() {
    console.log('get alias');
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  // profileForm = new FormGroup({
  //   first: new FormControl(),
  //   last: new FormControl(),
  //   address: new FormGroup({
  //     street: new FormControl(),
  //     city: new FormControl(),
  //     state: new FormControl(),
  //     zip: new FormControl(),
  //   }),
  // });
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });
  onSubmit() {
    this.profileForm.setValue({
      first: 'Nancy',
      last: 'Pelosi',
      address: {
        street: '123 Drew Street',
        city: 'ca',
        state: 'ca',
      },
    });
  }
}

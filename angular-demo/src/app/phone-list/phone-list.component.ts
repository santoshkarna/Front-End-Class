import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent {

  phoneForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.phoneForm = this.fb.group({
      phones: this.fb.array([this.fb.control('', Validators.required)])
    });
  }

  get phones() {
    return this.phoneForm.get('phones') as FormArray;
  }

  addPhone() {
    this.phones.push(this.fb.control('', Validators.required))
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }
}

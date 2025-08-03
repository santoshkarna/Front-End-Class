import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  userId!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id')!;
    });
    console.log(this.userId)
  }

  onSubmit(userForm: NgForm) {
    console.log("User Form data is: ", userForm);

    if (userForm.valid) {
      console.log("Form submitted: ", userForm.value);
      userForm.reset();
    }
  }

}

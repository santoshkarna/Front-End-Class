import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  today = new Date();

  price = 1234.56;

  user = {
    name: 'Ram',
    age: 33
  }

}

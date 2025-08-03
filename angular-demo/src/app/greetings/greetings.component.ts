import { Component } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.css'
})
export class GreetingsComponent {

  username = 'Raju';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  greets(){
    alert("Hello from Angular!!!")
  }

  show = true;

  items = ['TV', 'AC', 'Refrigerator'];

  device = 'TV';

  isHighLighted=false;

  fontSize = 14;
  color = 'blue';

}

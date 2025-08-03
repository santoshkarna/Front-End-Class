import { Component, OnInit } from '@angular/core';
import { LogService } from './services/log.service';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
//  template: `
//  {{title}}
//  <h1>Hello Welcome to Angular World!!!</h1>
//  <p>Good Evening from USA</p>
//  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'my angular-demo';
  name = 'Ram';
  user!: Observable<User[]>;

  constructor(private logService: LogService, private apiService: ApiService, private userService: UserService) {}


  ngOnInit(): void {
    this.logService.log('Hello form app component');
    console.log(this.apiService.getEnPoint());
    this.user = this.userService.getUsers();
  }


}

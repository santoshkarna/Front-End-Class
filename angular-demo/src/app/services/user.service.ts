import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.apiUrl);
  // }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`)
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

   getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map(users => users.filter(u => u.active)), //Only active users
      catchError(error => {
        //show error message on console
        console.error('Error: ', error);
        return of([]);//return empty error
      })
    );
  }

  //GET: fetch users
  // this.http.get<User>(this.apiUrl)
  //POST: add user
  // this.http.post<User>(this.apiUrl, user);
  //PUT: update user
  // this.http.put<User>(this.apiUrl, updatedUser);
  //DELETE: remove user
  // this.http.delete(this.apiUrl+'/'+userId);

  
//RxJS Operators:
//map: transform values
//filter: Filter out unwanted values
//catError: handle error gracefully
//switchMap, mergMap, concatMap: control concurrecncy & chaining
}

import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private apiUrl = 'http://localhost:8080/api/users';

    constructor(private http: HttpClient){}

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }

    getById(id: number): Observable<User>{
        return this.http.get<User>(`${this.apiUrl}/${id}`)
    }

    create(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, user);
    }

    update(id: number, updated: User): Observable<User> {
        return this.http.put<User>(`${this.apiUrl}/${id}`, updated);
    }

    delete(id: number): Observable<any>{
        return this.http.delete(`${this.apiUrl}/${id}`)
    }

}
import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private users: User[] = [
        { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
        { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Customer' }
    ];

    getAll(): User[] {
        return [...this.users]
    }

    getById(id: number): User | undefined {
        return this.users.find(u => u.id === id);
    }

    create(user: User) {
        user.id = Date.now();
        this.users.push(user);
    }

    update(id: number, updated: User) {
        const index = this.users.findIndex(u => u.id === id);
        if(index !== -1) this.users[index] = updated;
    }

    delete(id: number){
        this.users = this.users.filter(u => u.id !== id);
    }

}
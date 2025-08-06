import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly TOKEN_KEY = 'isLoggedIn';
    private readonly EMAIL_KEY = 'userEmail';

    login(email: string): void {
        localStorage.setItem(this.TOKEN_KEY, 'true');
        localStorage.setItem(this.EMAIL_KEY, email);
    }

    logout(): void {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.EMAIL_KEY);
    }

    isLoggedIn(): boolean {
        return localStorage.getItem(this.TOKEN_KEY) === 'true';
    }

    getUserEmail(): string | null {
        return localStorage.getItem(this.EMAIL_KEY);
    }
}
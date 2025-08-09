import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { Observable } from "rxjs";

export interface ApiResponse {
    message: string;
    success: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly TOKEN_KEY = 'isLoggedIn';
    private readonly EMAIL_KEY = 'userEmail';
    private readonly apiUrl = 'http://localhost:8080/api/auth';

    constructor(private http: HttpClient) { }

    /**
     * Login user and store token, email, and login state
     */
    login(email: string, password: string): Observable<{ token: string }> {
        return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password })
            .pipe(
                tap(res => {
                    localStorage.setItem('token', res.token);
                    localStorage.setItem(this.TOKEN_KEY, 'true');
                    localStorage.setItem(this.EMAIL_KEY, email);
                })
            );
    }

    /**
     * Register a new user — must match the backend User object
     */
    register(name: string, email: string, password: string): Observable<ApiResponse> {
        const payload = {
            name,
            email,
            password,
            role: 'CUSTOMER'
        };
        return this.http.post<ApiResponse>(`${this.apiUrl}/register`, payload);
    }

    /**
     * Remove token and user session
     */
    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.EMAIL_KEY);
    }

    /**
     * Check login state
     */
    isLoggedIn(): boolean {
        return localStorage.getItem(this.TOKEN_KEY) === 'true';
    }

    /**
     * Get user email
     */
    getUserEmail(): string | null {
        return localStorage.getItem(this.EMAIL_KEY);
    }
}

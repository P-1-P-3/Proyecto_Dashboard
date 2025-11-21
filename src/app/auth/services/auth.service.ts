import { Injectable, signal } from "@angular/core";
import { Observable, of } from "rxjs";

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _authStatus = signal<AuthStatus>('checking');

    login(email: string, password: string): Observable<boolean> {
        return of(true);
    };

    register(fullName: string, email: string, password: string): Observable<boolean> {
        return of(true);
    };
};
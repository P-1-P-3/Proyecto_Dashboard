import { inject, Injectable, signal } from "@angular/core";
import { delay, finalize, Observable, of } from "rxjs";
import { LoadingService } from "../../shared/components/loading/loading.service";

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly _loadingService = inject(LoadingService);
    private _authStatus = signal<AuthStatus>('checking');

    login(email: string, password: string): Observable<boolean> {
        this._loadingService.loadingOn();
        return of(true).pipe(
            delay(2000),
            finalize(() => this._loadingService.loadingOff())
        );
    };

    register(fullName: string, email: string, password: string): Observable<boolean> {
        this._loadingService.loadingOn();
        return of(true).pipe(
            delay(2000),
            finalize(() => this._loadingService.loadingOff())
        );
    };

    passwordResetLinkSent(email: string): Observable<boolean> {
        this._loadingService.loadingOn();
        return of(true).pipe(
            delay(2000),
            finalize(() => this._loadingService.loadingOff())
        );
    };
};
import { Component, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms"
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
    templateUrl: './login-page.component.html',
    imports: [
        ReactiveFormsModule,
    ]
})
export class LoginPageComponent {
    private readonly _formBuilder = inject(FormBuilder);
    private readonly _router      = inject(Router);
    private readonly _authService = inject(AuthService);

    hasError = signal<boolean>(false);

    loginForm = this._formBuilder.group({
        email:    ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

    onLogin() {
        if (this.loginForm.invalid) {
            this.showError();
            return;
        }

        const { email, password } = this.loginForm.value;

        this._authService.login(email!, password!).subscribe((res) => {
            if (res) {
                this._router.navigate(['/']);
                return;
            }

            this.showError();
        });
    };

    showError(delay: number = 4000) {
        this.hasError.set(true);
        setTimeout(() => this.hasError.set(false), delay);
    };
};
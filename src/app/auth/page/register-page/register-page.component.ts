import { Component, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { crossPasswordValidator } from "../../utils/auth-custom.validator";

@Component({
    templateUrl: './register-page.component.html',
    imports: [
        ReactiveFormsModule,
        RouterLink,
    ]
})
export class RegisterPageComponent {
    private readonly _formBuilder = inject(FormBuilder);
    private readonly _router      = inject(Router);
    private readonly _authService = inject(AuthService);

    hasError = signal<boolean>(false);

    registerForm = this._formBuilder.group({
        fullname: ['', [Validators.required, Validators.minLength(3)]],
        email:    ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        repeat_password: ['', [Validators.required, Validators.minLength(6)]],
    }, { validators: crossPasswordValidator });

    onRegister() {
        if (this.registerForm.invalid) {
            this.showError();
            return;
        }

        const { fullname, email, password } = this.registerForm.value;

        this._authService.register(fullname!, email!, password!).subscribe((res) => {
            if (res) {
                this._router.navigate(['/auth/login']);
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
import { Component, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
    templateUrl: './reset-password-page.component.html',
    imports: [
        ReactiveFormsModule,
    ]
})
export class ResetPasswordPageComponent {
    private readonly _formBuilder = inject(FormBuilder);
    private readonly _router      = inject(Router);
    private readonly _authService = inject(AuthService);

    hasError = signal<boolean>(false);
    linkSent = signal<boolean>(false);

    resetPasswordForm = this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]]
    });

    onResetPassword() {
        if (this.resetPasswordForm.invalid) {
            this.showError();
            return;
        };

        const email = this.resetPasswordForm.controls.email.value;

        this._authService.passwordResetLinkSent(email!).subscribe(async (res) => {
            if (!res) this.showError();
            
            await this.showMessage();
            this._router.navigate(['/auth/login']);
        });
    };

    showError(delay: number = 4000) {
        this.hasError.set(true);
        setTimeout(() => this.hasError.set(false), delay);
    };

    showMessage(delay: number = 4000): Promise<boolean> {
        this.linkSent.set(true);

        return new Promise(resolve => {
            setTimeout(() => {
                this.linkSent.set(false);
                resolve(true);
            }, delay);
        });
    };
};
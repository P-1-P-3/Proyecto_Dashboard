import { Routes } from "@angular/router";
import { LoginPageComponent } from "./page/login-page/login-page.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { RegisterPageComponent } from "./page/register-page/register-page.component";
import { ResetPasswordPageComponent } from "./page/reset-password-page/reset-password-page.component";

export const authRoutes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginPageComponent,
            },
            {
                path: 'register',
                component: RegisterPageComponent,
            },
            {
                path: 'reset-password',
                component: ResetPasswordPageComponent,
            },
            {
                path: '**',
                redirectTo: 'login',
            }
        ]
    }
];

export default authRoutes;
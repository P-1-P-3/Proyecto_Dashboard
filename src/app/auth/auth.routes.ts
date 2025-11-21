import { Routes } from "@angular/router";
import { LoginPageComponent } from "./page/login-page/login-page.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

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
                path: '**',
                redirectTo: 'login',
            }
        ]
    }
];

export default authRoutes;
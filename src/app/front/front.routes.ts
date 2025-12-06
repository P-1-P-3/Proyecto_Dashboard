import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { FrontLayoutComponent } from "./layouts/front-layout/front-layout.component";

export const frontRoutes: Routes = [
    {
        path: '',
        component: FrontLayoutComponent,
        children: [
            {
                path: '',
                title: 'Home',
                component: HomeComponent,
            },
            {
                path: '**',
                redirectTo: '',
            }
        ]
    }
];

export default frontRoutes
import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

export const frontRoutes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent,
    }
];

export default frontRoutes
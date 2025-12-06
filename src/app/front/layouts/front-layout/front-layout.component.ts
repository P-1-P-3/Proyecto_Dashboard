import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ThemeControllerComponent } from "../../components/theme-controller/theme-controller.component";

@Component({
    templateUrl: './front-layout.component.html',
    imports: [
    RouterOutlet,
    ThemeControllerComponent
]
})
export class FrontLayoutComponent {};
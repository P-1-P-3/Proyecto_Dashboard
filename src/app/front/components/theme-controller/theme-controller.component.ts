import { Component, ElementRef, inject, viewChild } from "@angular/core";
import { ThemeControllerService } from "./theme-controller.service";

@Component({
    selector: 'app-theme-controller',
    templateUrl: './theme-controller.component.html'
})
export class ThemeControllerComponent {
    private readonly _themeControllerService = inject(ThemeControllerService);

    private toggleTheme = viewChild<ElementRef<HTMLInputElement>>('toggleTheme');
    
    ngOnInit() {
        if (this._themeControllerService.theme() === 'forest') {
            this.toggleTheme()?.nativeElement.setAttribute('checked', 'true');
        } else {
            this.toggleTheme()?.nativeElement.removeAttribute('checked');
        }
    };

    setTheme(checked: boolean) {
        this._themeControllerService.setTheme(checked ? 'forest' : 'light');
    };
};
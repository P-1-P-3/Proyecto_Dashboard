import { DOCUMENT } from "@angular/common";
import { computed, inject, Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ThemeControllerService {
    private readonly document = inject(DOCUMENT);
    private preferredTheme = signal(localStorage.getItem('preferredTheme') ?? 'light');
    theme = computed(() => this.preferredTheme());

    setTheme(theme: 'forest' | 'light') {
        this.document.documentElement.setAttribute('data-theme', theme);
        this.preferredTheme.set(theme);
        localStorage.setItem('preferredTheme', theme);
    };
};
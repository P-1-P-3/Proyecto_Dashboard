import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { ThemeControllerService } from './front/components/theme-controller/theme-controller.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly _themeControllerService = inject(ThemeControllerService);
  title = 'dashboard';

  ngOnInit() {
    const checked = this._themeControllerService.theme() === 'forest';
    this._themeControllerService.setTheme(checked ? 'forest' : 'light');
  };
}

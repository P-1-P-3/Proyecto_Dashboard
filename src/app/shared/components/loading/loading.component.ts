import { Component, inject } from "@angular/core";
import { LoadingService } from "./loading.service";

@Component({
    selector: 'app-loading',
    template: `
        @if (_loadingService.showLoading()) {
            <div class="fixed inset-0 z-9999 flex items-center justify-center bg-base-100/50 backdrop-blur-sm">
                <div class="p-4 rounded">
                    <span class="loading loading-spinner loading-lg"></span>
                </div>
            </div>
        }
    `
})
export class LoadingComponent {
    _loadingService = inject(LoadingService);
};
import { computed, Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private stateLoading = signal<boolean>(false);
    showLoading = computed(() => this.stateLoading());

    loadingOn() {
        this.stateLoading.set(true);
    };

    loadingOff() {
        this.stateLoading.set(false);
    };
}
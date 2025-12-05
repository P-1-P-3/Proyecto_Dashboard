import { Component, inject, input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-form-error',
    templateUrl: './form-error.component.html',
})
export class FormErrorComponent {
    formGroup = input.required<FormGroup>();
    field     = input.required<string>();
    message   = input.required<string>();

    hasError(): boolean | undefined {
        return this.formGroup().get(this.field())?.invalid && this.formGroup().get(this.field())?.touched;
    };
};
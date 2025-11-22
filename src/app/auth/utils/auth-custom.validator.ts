import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const crossPasswordValidator: ValidatorFn = (formGroupControl: AbstractControl<{password: string, repeat_password: string}>): ValidationErrors | null => {
    const { password, repeat_password } = formGroupControl.value;

    return password === repeat_password ? null : { crossPasswordValidator: true };
};
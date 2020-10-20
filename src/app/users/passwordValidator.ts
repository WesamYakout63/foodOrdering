import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class passwordValidator {
    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } => {
            if (!control.value) {
                return null;
            }
            return regex.test(control.value) ? null : error;
        }
    }

    static mustMatch(control: AbstractControl) {
        if (control && (control.value !== null || control.value !== undefined)) {
            const cnfpassValue = control.value;
            const passControl = control.root.get('password');
            if (passControl) {
                const passValue = passControl.value;
                if (passValue !== cnfpassValue) {
                    return { isError: true };
                }
            }
        }
        return null;
    }
}
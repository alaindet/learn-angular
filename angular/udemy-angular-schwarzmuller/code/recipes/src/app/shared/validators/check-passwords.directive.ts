import { Directive } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Directive({
  selector: '[appCheckPasswords]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckPasswordsDirective,
      multi: true
    }
  ]
})
export class CheckPasswordsDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validatorFunction(control);
  }

  private validatorFunction(control: AbstractControl): ValidationErrors | null {

    if (!(control && control instanceof FormGroup)) {
      return { invalidPassword: true };
    }

    const passwordInput = 'password';
    const passwordConfirmInput = 'password-confirm';
    const group = control as FormGroup;
    const password = group.controls[passwordInput];
    const passwordConfirm = group.controls[passwordConfirmInput];

    if (!(password && passwordConfirm)) {
      return { invalidPassword: true };
    }

    if (password.value !== passwordConfirm.value) {
      return { passwordsDontMatch: true };
    }

    return null;

  }

}

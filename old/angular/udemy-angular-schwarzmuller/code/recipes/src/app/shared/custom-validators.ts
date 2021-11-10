import validator from 'validator';
import { FormControl } from '@angular/forms';

interface ValidationErrorMap {
  [key: string]: boolean;
}

export abstract class CustomValidators {

  public static isUrl(control: FormControl): ValidationErrorMap | null {
    if (!validator.isURL(control.value)) {
      return { urlIsInvalid: true };
    }
    return null;
  }

}

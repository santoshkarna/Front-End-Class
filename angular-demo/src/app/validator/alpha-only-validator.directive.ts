import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appAlphaOnly]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AlphaOnlyValidatorDirective,
    multi: true
  }]
})
export class AlphaOnlyValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    // Debug log:
    console.log('AlphaOnlyValidator running!', control.value);
    const val = control.value;
    if (val && !/^[a-zA-Z]+$/.test(val)) {
      return { alphaOnly: true };
    }
    return null;
  }
}

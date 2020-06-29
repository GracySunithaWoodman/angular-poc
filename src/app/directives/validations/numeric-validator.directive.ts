import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appNumericValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS, 
      useExisting: NumericValidatorDirective,
      multi: true
    }
  ]
})

/**Validates if field is numeric or not */
export class NumericValidatorDirective implements Validator{

  NUMERIC_REGEXP = /^[0-9]+$/;

  //Info: Validators Interface has a validate method
  validate(control: AbstractControl): ValidationErrors | null {

    if (control.value && !this.NUMERIC_REGEXP.test(control.value)) {
      return { 'numeric': true };
    }
    return null;

  }
}

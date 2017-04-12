import {Directive, Input, forwardRef} from '@angular/core';
import {Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appEqual][ngModel]',
  providers: [ {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualDirective),
    multi: true } ]
})

export class EqualDirective implements Validator {

  constructor() { }

  @Input("appEqual")
  public validateEqual: string;
  validate({value:modelValue}:AbstractControl): { [key: string]: any } {
    if (modelValue !== this.validateEqual) {
      return { validateEqual: false };
    }
    return null;
  }
}

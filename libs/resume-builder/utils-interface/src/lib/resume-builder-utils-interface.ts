import { Observable } from 'rxjs';
import { AbstractControl, AbstractControlOptions, ValidatorFn } from '@angular/forms';

export interface IFormShell<T> {
  formData: T;
  formIsValid$: Observable<boolean>;
  formSubmit: (callback: (data: T) => void) => void;
}

export type FormGroupConfig<T> = {
  [P in keyof T]: [
    T[P] | { value: T[P]; disabled: boolean; },
    (AbstractControlOptions | ValidatorFn | ValidatorFn[])?
  ] | AbstractControl;
};

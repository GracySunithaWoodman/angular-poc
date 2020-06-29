import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent{

  @Input()
  private control: AbstractControl;

  private static readonly errorMessages = {
    'required': () => 'This field is required',
    'numeric': () => 'This field allows only numeric values',
    'email': () => 'This field allows only email format',
    'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    'countryCity': (params) => params.message,
    'uniqueName': (params) => params.message,
    'telephoneNumber': (params) => params.message
  };


  
  shouldShowErrors(): boolean {
    return this.control && this.control.errors != null;
  }


  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ShowErrorComponent.errorMessages[type](params);
  }
}

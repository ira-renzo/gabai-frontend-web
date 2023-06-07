import {Component, Input} from '@angular/core';
import {FIELD_ERROR} from "./error-message";
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.css']
})
export class ValidationMessageComponent {

  @Input() control!: AbstractControl;

  validators = Object.keys(FIELD_ERROR);
  validationMessages = Object.values(FIELD_ERROR);

}
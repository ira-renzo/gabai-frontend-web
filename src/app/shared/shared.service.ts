import {Injectable, TemplateRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  validationMessageTemplate!: TemplateRef<any>

  setValidationMessageTemplate(template: TemplateRef<any>) {
    this.validationMessageTemplate = template
  }

  getValidationMessageTemplate() {
    return this.validationMessageTemplate
  }

}
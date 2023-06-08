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

  base64_to_file(base64: string, name: string) {
    let binaryString = atob(base64)
    const bytes = new Uint8Array(binaryString.length);
    const buffer = bytes.map((byte, i) => binaryString.charCodeAt(i));
    const blob = new Blob([buffer])
    return new File([blob], name)
  }

}
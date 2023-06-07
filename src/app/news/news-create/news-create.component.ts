import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NzUploadFile} from "ng-zorro-antd/upload";
import {RxwebValidators} from "@rxweb/reactive-form-validators";
import {SharedService} from "../../shared/shared.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {

  form: FormGroup
  file_list: NzUploadFile[] = []
  validation_template = this.sharedService.getValidationMessageTemplate()

  constructor(private formBuilder: FormBuilder, private sharedService: SharedService, private httpClient: HttpClient) {
    this.form = formBuilder.group({
      title: ["", RxwebValidators.required()],
      content: ["", RxwebValidators.required()]
    })
  }

  ngOnInit(): void {
  }

  submit() {
    let formValue = this.form.getRawValue()
    let data = new FormData()
    Object.keys(formValue).forEach(key => data.set(key, formValue[key]))
    this.file_list.forEach(file => data.append("attachments", file as any))
    this.httpClient.post(`${environment.api_url}/news/create`, data).subscribe(() => {
      console.log("DONE")
    })
  }

  manualAdd = (file: NzUploadFile) => {
    this.file_list = this.file_list.filter(temp_file => temp_file.name != file.name)
    this.file_list = this.file_list.concat(file)
    return false
  }

}
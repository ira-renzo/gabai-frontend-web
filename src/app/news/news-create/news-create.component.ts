import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NzUploadFile} from "ng-zorro-antd/upload";
import {RxwebValidators} from "@rxweb/reactive-form-validators";
import {SharedService} from "../../shared/shared.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {Attachment, News} from "../models";
import * as FileSaver from "file-saver";

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {

  form: FormGroup
  file_list: NzUploadFile[] = []
  validation_template = this.sharedService.getValidationMessageTemplate()
  id: string | null = null

  constructor(private formBuilder: FormBuilder,
              private sharedService: SharedService,
              private httpClient: HttpClient,
              private router: ActivatedRoute) {
    this.form = formBuilder.group({
      title: ["", RxwebValidators.required()],
      content: ["", RxwebValidators.required()]
    })
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(value => {
      this.id = value.get("id")
      if (this.id == null) return
      this.httpClient.get<News>(`${environment.api_url}/news/${this.id}`).subscribe(response => {
        this.form.patchValue(response)
        let attachments: Attachment[] = response.attachments
        let file_list = attachments.map(attachment => {
          let converted: NzUploadFile = this.sharedService.base64_to_file(attachment.data, attachment.name) as any
          converted.status = "done"
          return converted
        })
        this.file_list = file_list as any
      })
    })
  }

  submit() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach(control => {
        control.markAsDirty()
        control.updateValueAndValidity()
      })
      return
    }

    let formValue = this.form.getRawValue()
    let data = new FormData()
    Object.keys(formValue).forEach(key => data.set(key, formValue[key]))
    this.file_list.forEach(file => data.append("attachments", file as any))

    this.httpClient.post(`${environment.api_url}/news/create`, data).subscribe(() => {
      window.location.href = "/news/list"
    })
  }

  manualAdd = (file: NzUploadFile) => {
    this.file_list = this.file_list.filter(temp_file => temp_file.name != file.name)
    this.file_list = this.file_list.concat(file)
    return false
  }

  download = (file: NzUploadFile) => {
    FileSaver.saveAs(file as any, file.name)
  }

}
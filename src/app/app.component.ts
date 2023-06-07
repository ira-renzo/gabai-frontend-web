import {AfterViewInit, Component, TemplateRef, ViewChild} from '@angular/core';
import {SharedService} from "./shared/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild("validationMessageTemplate") template!: TemplateRef<any>

  constructor(private sharedService: SharedService) {
  }

  ngAfterViewInit(): void {
    this.sharedService.setValidationMessageTemplate(this.template)
  }

}
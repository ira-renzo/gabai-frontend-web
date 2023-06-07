import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {NgOptimizedImage, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {ValidationModule} from "./shared/validation/validation.module";
import {ReactiveFormConfig, RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import {FIELD_ERROR} from "./shared/validation/error-message";
import {ErrorInterceptor} from "./shared/interceptors/ErrorInterceptor";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {RequestInterceptor} from "./shared/interceptors/RequestInterceptor";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    NgOptimizedImage,
    NzLayoutModule,
    NzMenuModule,
    RouterOutlet,
    RxReactiveFormsModule,
    ValidationModule,
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
    NzNotificationService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    ReactiveFormConfig.set({
      validationMessage: FIELD_ERROR
    });
  }

}
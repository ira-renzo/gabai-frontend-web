import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimestampPipe} from "./pipes/TimestampPipe";


@NgModule({
  declarations: [TimestampPipe],
  exports: [
    TimestampPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
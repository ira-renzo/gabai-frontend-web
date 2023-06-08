import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TopicsRoutingModule} from './topics-routing.module';
import {TopicsComponent} from "./topics.component";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzWaveModule} from "ng-zorro-antd/core/wave";


@NgModule({
  declarations: [TopicsComponent],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzWaveModule
  ]
})
export class TopicsModule {
}
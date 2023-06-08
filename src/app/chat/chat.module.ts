import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChatRoutingModule} from './chat-routing.module';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {SharedModule} from "../shared/shared.module";
import {ChatViewComponent} from './chat-view/chat-view.component';
import {NzCommentModule} from "ng-zorro-antd/comment";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ChatViewComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    NzIconModule,
    NzTableModule,
    NzToolTipModule,
    SharedModule,
    NzCommentModule,
    NzInputModule,
    NzButtonModule,
    FormsModule
  ]
})
export class ChatModule {
}
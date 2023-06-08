import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewsRoutingModule} from './news-routing.module';
import {NewsCreateComponent} from "./news-create/news-create.component";
import {NewsListComponent} from "./news-list/news-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [NewsCreateComponent, NewsListComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzUploadModule,
    NzButtonModule,
    NzIconModule,
    NzTableModule,
    NzDividerModule,
    NzToolTipModule,
    SharedModule
  ]
})
export class NewsModule {
}
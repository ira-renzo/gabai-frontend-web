import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsCreateComponent} from "./news-create/news-create.component";
import {NewsListComponent} from "./news-list/news-list.component";

const routes: Routes = [
  {path: "", component: NewsCreateComponent},
  {path: "list", component: NewsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
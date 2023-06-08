import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'news', loadChildren: () => import("./news/news.module").then(m => m.NewsModule)},
  {path: 'chat', loadChildren: () => import("./chat/chat.module").then(m => m.ChatModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
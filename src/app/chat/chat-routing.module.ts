import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatListComponent} from "./chat-list/chat-list.component";
import {ChatViewComponent} from "./chat-view/chat-view.component";

const routes: Routes = [
  {path: "list", component: ChatListComponent},
  {path: "view", component: ChatViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule {
}
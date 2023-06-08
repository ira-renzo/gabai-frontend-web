import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export interface Message {
  author: string
  content: string
}

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatViewComponent implements OnInit {

  name = "User"
  message = ""
  messages: Message[] = []

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.update(false)
    this.scrollToEnd()
    setInterval(() => this.update(false), 5000)
  }

  update(is_new_message: boolean) {
    let data = null
    if (is_new_message && this.message.length > 0) {
      data = {"author": this.name, "content": this.message}
      this.message = ""
    }
    this.httpClient.post(`${environment.api_url}/chat`, data).subscribe(value => {
      this.messages = value as Message[]
      if (is_new_message) this.scrollToEnd()
    })
  }

  scrollToEnd() {
    let scroll = () => {
      let messages = document.querySelector("div.messages")!
      messages.scrollTo(0, messages.scrollHeight * 2)
    }
    setTimeout(scroll, 1000)
  }

}
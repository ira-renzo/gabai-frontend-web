import {Component, ViewEncapsulation} from '@angular/core';

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
export class ChatViewComponent {

  name = "User"
  sample_text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  messages: Message[] = [
    {author: "User", content: this.sample_text},
    {author: "Auto Mode", content: this.sample_text},
    {author: "Auto Mode", content: this.sample_text},
    {author: "User", content: this.sample_text},
    {author: "ChatGPT Mode", content: this.sample_text},
  ]

}
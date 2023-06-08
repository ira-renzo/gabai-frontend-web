import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import * as FileSaver from "file-saver";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topic_list: Topic[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.get_list()
  }

  get_list() {
    this.httpClient.post(`${environment.api_url}/topic`, null).subscribe(response => {
      this.topic_list = Object.entries(response).map(([key, value]: [string, string[]]) => ({key: key, conversation: value}))
    })
  }

  new() {
    // let data: Topic = {
    //   key: null,
    //   conversation: ["yah", "yoh"]
    // }
    // this.httpClient.post(`${environment.api_url}/topic`, data).subscribe(() => {
    //   this.get_list()
    // })
  }

  download() {
    let conversations = this.topic_list.map(topic => topic.conversation)
    let blob = new Blob([JSON.stringify(conversations)])
    FileSaver.saveAs(blob, "for-training.json")
  }

}

export interface Topic {
  key: string | null
  conversation: string[]
}
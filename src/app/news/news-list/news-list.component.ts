import {Component, OnInit} from '@angular/core';
import {News} from "../models";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news_list: News[] = []

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get(`${environment.api_url}/news/list`).subscribe(response => {
      let news_list: News[] = Object.values(response)
      // news_list.map(news => {
      //   news.timestamp = new Date(news.timestamp) as any
      //   return news.timestamp
      // })
      this.news_list = news_list
    })
  }

}
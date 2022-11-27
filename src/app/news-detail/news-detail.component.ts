import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  news: any;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id']
    this.route.params.subscribe(params=>{
      const id = params['id']
      this.news = this.newsService.news.find(eachObj => eachObj.id === +id)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: any[]=[]

  id!: string
  title!: string
  author!: string

  constructor(
    // private route: ActivatedRoute,
    // private router: Router,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.news = this.newsService.news
  }

}

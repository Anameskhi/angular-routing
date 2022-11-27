import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news = [
    {
      id: 1,
      title: 'News 1',
      author: 'author1'
    },
    {
      id: 2,
      title: 'News 2',
      author: 'author 2'
    },
    {
      id: 3,
      title: 'News 3',
      author: 'author 3'
    }
  ]

  constructor() { }
}

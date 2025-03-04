import { Component, OnInit } from '@angular/core';
import { NewsArticle } from '../models/news-article';
import { NewsService } from '../services/news.service';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-landing-page',
  imports: [NewsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  
  news!: NewsArticle[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.news = this.newsService.getNews();
  }



  
}

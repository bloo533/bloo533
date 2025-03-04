import { Component, Input } from '@angular/core';
import { NewsArticle } from '../models/news-article';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-news',
  imports: [TitleCasePipe],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  @Input() news !: NewsArticle;

  
}

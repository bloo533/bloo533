import { Injectable } from '@angular/core';
import { NewsArticle } from '../models/news-article';

@Injectable({
    providedIn: 'root'
  })

  export class NewsService {
    private news: NewsArticle[] = [
        new NewsArticle('Assemblée générale 2025', 
            "La prochaine assemblée générale aura lieu le samedi 12 avil 2025 à 15h après les cours.\n Soyez présent!" , 
            '/assets/images/meeting.jpg'),
        new NewsArticle('\u00C9lections 2025', 
            "L'association d'éducation canine de Vienne est administrée, conformément à l'article 12 de ses statuts, par un comité comprenant un maximum de 8 adminitrateurs élus pour 6 ans et renouvelés par moitié tous les 3 ans.\n Le scrutin pour l'élection des 4 postes à pourvoir cette année aura lieu lors de l'assemblée générale du 12 avril 2025."
            , '/assets/images/vote.jpg' ),
        new NewsArticle('On récupère!',"L'association cherche des tôles bac acier pour refaire la toiture de la buvette. Si vous ne savez pas quoi faire de vos tôles inutilisées, n'hésitez pas à en faire don au club!",'/assets/images/tole_toit.png')
    ];

    getNews() {
        return this.news;
    }
  }
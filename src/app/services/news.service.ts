import { Injectable } from '@angular/core';
import { NewsArticle } from '../models/news-article';

@Injectable({
    providedIn: 'root'
  })

  export class NewsService {
    private news: NewsArticle[] = [
        new NewsArticle('Reprise des cours', 
            "La reprise des cours aura lieu le samedi 6 septembre 2025. \nLes horaires restent les mêmes: 11h pour les chiots et 14h pour les ados et les adultes." , 
            '/assets/images/news/training.jpg'),
        new NewsArticle('Forum des associations', 
        "Le club canin de Vienne sera présent au forum des associations le samedi 6 septembre 2025. \nVenez nous rencontrer et découvrir nos activités!", 
        '/assets/images/news/forum.png'),
        /*new NewsArticle('\u00C9lections 2025', 
            "L'association d'éducation canine de Vienne est administrée, conformément à l'article 12 de ses statuts, par un comité comprenant un maximum de 8 adminitrateurs élus pour 6 ans et renouvelés par moitié tous les 3 ans.\n Le scrutin pour l'élection des 4 postes à pourvoir cette année aura lieu lors de l'assemblée générale du 12 avril 2025."
            , '/assets/images/news/vote.jpg' ),*/
        new NewsArticle('On récupère!',"L'association cherche des tôles bac acier pour refaire la toiture de la buvette. Si vous ne savez pas quoi faire de vos tôles inutilisées, n'hésitez pas à en faire don au club!",'/assets/images/news/tole_toit.png')
    ];

    getNews() {
        return this.news;
    }
  }
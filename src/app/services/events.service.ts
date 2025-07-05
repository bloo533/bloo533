import { Injectable } from '@angular/core';

import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})  

export class EventsService {

    private events: Event [] = [
        new Event("Challenge de l'amitié 2025", [
            "Nous avons le plaisir d'accueuillir cette année la 64ème édition du challenge de l'amitié.",
            "Créée en 1959, cet évènement donne l'occasion aux clubs canins de France de se rencontrer et de passer un bon moment en s'affrontant sur des épreuves d'obéissance, de ring et d'IGP par équipes de 4 compétiteurs.",
            "Ici, l'objectif n'est pas tant la performance mais surtout le fun! Les équipes peuvent d'ailleurs venir déguisées.",
            "\nLe club qui arrivera en tête du classement aura l'honneur d'organiser la prochaine édition.",
            "Repas possible sur place (frites, saucisses, boissons)."
        ], 
        new Date('2025-05-29T08:00'), 'assets/images/challenge_2025.jpg',
        20)
    ]

    getEvents(): Event[] {
        return this.events;
    }


}

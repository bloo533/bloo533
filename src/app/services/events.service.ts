import { Injectable } from '@angular/core';

import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})  

export class EventsService {

    private events: Event [] = [
        new Event("Gouter de Noël", [
            "Le gouter de Noël aura lieu le samedi 20 décembre 2025 après les cours.",
            "Ami.e.s patissier.e.s, n'hésitez pas à apporter vos meilleures recettes!",
            "Evènement réservé aux membres du club."
        ],
        new Date('2025-12-20T15:00'), '/assets/images/events/noel_2025.jpg',
            0),
        
        new Event("Challenge de l'amitié 2026", [
            "Le prochain challenge de l'amitié sera organisé par le club de Grenoble, gagnant de l'édition 2025.",
            "Créée en 1959, cet évènement donne l'occasion aux clubs canins de France de se rencontrer et de passer un bon moment en s'affrontant sur des épreuves d'obéissance, de ring et d'IGP par équipes de 4 compétiteurs.",
            "L'objectif n'est pas tant la performance mais surtout le fun! Les équipes peuvent d'ailleurs venir déguisées.",
            "\nLe club qui arrivera en tête du classement aura l'honneur d'organiser la prochaine édition.",
            "Inscription ouverte jusqu'au 30 avril 2026."
        ], 
        new Date('2026-05-14T08:00'), '/assets/images/events/challenge_2026.png',
            0) 

    ];

    getEvents(): Event[] {
        return this.events;
    }


}

import { Injectable } from '@angular/core';

import { Course } from '../models/course';

@Injectable({
    providedIn: 'root'
})

export class CoursesService {

    private courses: Course[] = [
        new Course("L'école du chiot",
            [
                "Cette méthode d'éducation du chiot, basée sur le jeu, permet au chiot quelle que soit sa race, d'acquérir dès son plus jeune âge les bons réflexes et de renforcer très tôt sa complicité avec son maître.",
                "Animal de meute à l'origine, un chiot, a besoin d'être éduqué pour vivre en société. Cette étape indispensable, au cours de laquelle il apprend à revenir dès qu'on l'appelle, à se familiariser avec l'environnement, à obéir aux ordres, à marcher en laisse sans tirer lors des promenades, à avoir un comportement équilibré avec ses congénères…, nécessite du temps et des réflexes pas toujours connus par les propriétaires.",
                "Fruit d'un partenariat entre la Société Centrale Canine et Royal Canin, l'école du chiot est une activité proposée par les clubs canins français pour toutes les races de chiens, même les plus petites.",
                "Elle s'adresse à tous les propriétaires de chiots (dès 2 mois) et de jeunes chiens qui souhaitent bénéficier de cette méthode d'éducation pour leur animal.",
                "Des moniteurs passionnés, formés pour éduquer votre chiot sous forme de jeux vous accueilleront et feront de cet apprentissage, la garantie d'une vie harmonieuse au sein de son foyer"
            ],
            'assets/images/puppy_school.png',
            "Le samedi de 11h à 11h30"),
        new Course("L'éducation canine",
            [
                "Les cours collectifs de socialisation durent 1 heure.",
                "Entre chaque leçon, il vous est demandé de travailler 10 minutes chaque jour afin de mettre en place nos solutions et de répéter quelques exercices de dressage en douceur.",
                "Nous travaillerons l'obéissance, l'apprentissage de la marche en laisse, sans laisse, les positions de base, le rappel, le refus de l'appât et toutes les ordres qui vous faciliteront la vie.",
                "Si besoin nous entamerons des exercices liés à des problemes d'aboiements, d'agressivité, de phobies, d'anxiété de séparation..."
            ],
            'assets/images/dog_school.png',
            'Le samedi de 14h à 15h'),

    ];

    getCourses() {
        return this.courses;
    }
}
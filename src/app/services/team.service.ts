import { Injectable } from "@angular/core";
import { TeamMember } from "../models/team-member";


@Injectable({  
    providedIn: 'root'
})

export class TeamService {
    private teamMembers: TeamMember[] = [
        new TeamMember("Marc", "Debouvrie", "Président", "/assets/images/team/MDE.png", 
            [
                "Moniteur - Educateur (MEC1)",
                "Habilitation au mordant et à la formation de chiens catégorisés"
            ],
            [
                "Jaguar de la Vallée de Taravo (BA mâle) : Brevet de ring et obéissance niveau 3",
                "Sargus de Valsorie (BA mâle) : Ring niveau 2 et brevet obéissance",
                "Vorf (BBM mâle) : Ring niveau 2 et brevet d'obéissance",
                "Eltonn du Creux Thatcher (BBM mâle) : Sélectif Ring et brevet d'obéissance",
                "Rocco des Collines Drômoise (BBM mâle) : Brevet de ring"
            ]
        ),
        new TeamMember("Marie-Christine", "Odrat", "Secrétaire", "/assets/images/team/MCO.png", 
            [
                "Monitrice - Educatrice (MEC1)",
                "Diplômée de l'école du chiot"
            ],
            [
                "Baïka (Golden Retriever femelle) : Brevet d’obéissance"
            ]
        ),
        new TeamMember("Marie-Christine", "Gagne", "Trésorière", "/assets/images/team/MCG.png", 
            [
                "Monitrice - Educatrice (MEC1)"
            ],
            [
                "Funky du Creux Thatcher (BBM femelle) : Ring niveau 1 et obéissance niveau 2",
                "Louna des Collines Drômoise (BBM femelle) : Ring niveau 1 et obéissance niveau 2",
                "Eltonn du Creux Thatcher (BBM mâle) : Obéissance niveau 3",
                "Marcus des Gardiens de la Plaine (BBM mâle) : Ring niveau 2, obéissance niveau 2, participation au championnat de France d'obéissance 2018 niveau 1",
                "Oumy des Collines Drômoise (BBM femelle) : Ring niveau 1 et obéissance niveau 1"
            ]
        ),
        new TeamMember("Noëlle", "Buffard", "Vice-Présidente", "/assets/images/team/NBD.png", 
            [
                "Monitrice de club"
            ],
            [
                "Hetan des 4 griffes noires (Berger de Beauce mâle) : Participation au championnat de France d'obéissance 2018 niveau 2, obéissance niveau 3"
            ]
        ),
        new TeamMember("Jean-Pierre", "Odrat", "Membre du comité", "/assets/images/team/JPO.png", 
            [],
            []
        ),
        new TeamMember("Polina", "Maslova", "Membre du comité", "/assets/images/team/PMA.png", 
            [],
            ["Thor (Braque Allemand mâle) : Obéissance niveau 1"]
        ),
        new TeamMember("Delphine", "Odrat-Dubois", "Membre du comité", "/assets/images/team/DOT.png", 
            [],
            ["Perle des Légendaires de Nahauri  (Golden Retriver femelle) : SCAU"]
        ),
        new TeamMember("Audrey", "Soto", "Membre du comité", "/assets/images/team/ASO.png", 
            [],
            ["Triskell  (Golden Retriver mâle) : SCAU"]
        )
    ];

    getTeamMembers(): TeamMember[] {
        return this.teamMembers;
    }
}

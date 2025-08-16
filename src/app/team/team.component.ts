import { Component, OnInit } from '@angular/core';
import { TeamMemberComponent } from '../team-member/team-member.component';
import { TeamMember } from '../models/team-member';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team',
  imports: [TeamMemberComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
  team: TeamMember[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.team = this.teamService.getTeamMembers();
  }

}

import { Component, Input } from '@angular/core';
import { TeamMember } from '../models/team-member';

@Component({
  selector: 'app-team-member',
  imports: [],
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.scss'
})
export class TeamMemberComponent {
  @Input() teamMember !: TeamMember;
}

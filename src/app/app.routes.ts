import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoursesComponent } from './courses/courses.component';
import { EventsComponent } from './events/events.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { TeamComponent } from './team/team.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'events', component: EventsComponent},
    {path: 'team', component: TeamComponent},
    {path: 'contact', component: ContactInfoComponent}
];

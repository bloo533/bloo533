import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoursesComponent } from './courses/courses.component';
import { EventsComponent } from './events/events.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'events', component: EventsComponent},
    {path: 'contact', component: ContactInfoComponent}
];

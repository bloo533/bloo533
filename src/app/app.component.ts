import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { TopMenuComponent } from "./top-menu/top-menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TopMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Club Canin de Vienne';
}

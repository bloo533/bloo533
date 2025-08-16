import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';


@Injectable({
    providedIn: 'root'
  })

  export class MenuItemService {
    private menuItemsTop: MenuItem[] = [
        new MenuItem('Accueil', ''),
        new MenuItem('Les cours', '/courses'),
        new MenuItem('Les évènements', '/events'),
        new MenuItem('L\'équipe', '/team'),
        new MenuItem('Contact', '/contact')
    ];

    private menuItemsSide: MenuItem[] = [
        new MenuItem('Mentions légales', '/legal-notice'),
        new MenuItem('Politique de confidentialité', '/privacy-policy'),
        new MenuItem('Plan du site', '/site-map')
    ];

    getMenuItemsTop() {
        return this.menuItemsTop;
    }

    getMenuItemsSide() {
        return this.menuItemsSide;
    }

 
}
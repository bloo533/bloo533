import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { MenuItemService } from '../services/menu-item.service';


@Component({
  selector: 'app-top-menu',
  imports: [],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent implements OnInit {

  menuItems !: MenuItem[];
  
  constructor( private menuItemService: MenuItemService) { }

  ngOnInit(): void {
    this.menuItems = this.menuItemService.getMenuItemsTop();
  }


}

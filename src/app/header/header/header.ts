import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  img: string = "./img/favicon.ico";
  home: string = "home";
  about: string = "about";
  services: string = "services";
  projects: string = "projects";
  contact: string = "contact";
  tab: string[] = ["home", "about", "services", "projects", "contact"];
  showMenu = false;
  protected readonly faCartShopping = faCartShopping;
}

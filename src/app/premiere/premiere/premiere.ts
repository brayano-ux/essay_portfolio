import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Panierservice } from '../../panierservice/panierservice'; // 👈 Import du service

@Component({
  selector: 'app-premiere',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule], // 👈 Ajoutez-le ici
  templateUrl: './premiere.html',
  styleUrl: './premiere.css'
})
export class Premiere {
  // Déclarez vos variables d'icônes pour le HTML
  iconSearch = faMagnifyingGlass;
  iconCart = faCartShopping;
    public panierService = inject(Panierservice); 

}

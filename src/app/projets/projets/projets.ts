import { Component,inject } from '@angular/core';
import { ProduitService,Produit } from '../../service/produitservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projets',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './projets.html',
  styleUrl: './projets.css',
})
export class Projets {
   private produitService = inject(ProduitService); 
  listeDeProduits: Produit[] = this.produitService.lister();
   connect=this.produitService.isconnect;
     estconnecter():void{
    this.connect=!this.connect;
     }
}

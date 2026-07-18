import { Component, inject } from '@angular/core';
import { ProduitService, Produit } from '../../service/produitservice';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-services',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services{
  private produitService = inject(ProduitService); 
  listeDeProduits: Produit[] = this.produitService.lister();

    connect=this.produitService.isconnect;
     estconnecter():void{
    this.connect=this.connect;
  }

}

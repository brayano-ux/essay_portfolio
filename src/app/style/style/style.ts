import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService, Produit } from '../../style/style'; 
import { Panierservice } from '../../panierservice/panierservice';

@Component({
  selector: 'app-style',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style.html',
  styleUrl: './style.css',
})
export class StyleComponent implements OnInit {
  private produitService = inject(ProduitService);
    private panierService = inject(Panierservice); // 👈 Injectez le service

  listeProduits: Produit[] = [];

  ngOnInit(): void {
    this.listeProduits = this.produitService.getProduits();

  }
   ajouterAuPanier(produit: Produit): void {
    this.panierService.ajouterAuPanier(produit);
    console.log(`Produit ajouté au panier : ${produit.title}`);
  }


//   ajouterAuPanier(produit: Produit): void {
//   const number = "237683260520";
  
//   // Utilisation du pipe de devise ou formatage manuel propre pour le message
//   const message = `Bonjour, je voudrais commander l'article suivant :\n- ${produit.title} (${produit.price} $)`;
  
//   // Utilisation de encodeURIComponent (plus robuste que encodeURI pour les paramètres d'URL)
//   const encode = encodeURIComponent(message);
  
//   // Correction de l'URL avec https:// et structure wa.me correcte
//   const wa = `https://wa.me${number}?text=${encode}`;
  
//   // Ouverture sécurisée dans un nouvel onglet
//   window.open(wa, '_blank');
  
//   console.log(`Produit redirigé vers WhatsApp : ${produit.title} (${produit.price}$)`);
// }

}

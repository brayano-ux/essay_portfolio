import { Injectable, signal } from '@angular/core';
import { Produit } from '../style/style';

export interface LignePanier {
  produit: Produit;
  quantite: number;
}

@Injectable({
  providedIn: 'root',
})
export class Panierservice {
  // Utilisation des Signals d'Angular pour une mise à jour instantanée de l'interface
  panier = signal<LignePanier[]>([]);

  // Ajouter un produit au panier
  ajouterAuPanier(produit: Produit): void {
    const panierActuel = this.panier();
    const articleExistant = panierActuel.find(item => item.produit.id === produit.id);

    if (articleExistant) {
      articleExistant.quantite += 1;
      this.panier.set([...panierActuel]);
    } else {
      this.panier.set([...panierActuel, { produit, quantite: 1 }]);
    }
  }

  // Obtenir le nombre total d'articles (pour le badge du Header)
  getNombreArticles(): number {
    return this.panier().reduce((total, item) => total + item.quantite, 0);
  }

  // Obtenir le prix total de la commande
  getMontantTotal(): number {
    return this.panier().reduce((total, item) => total + (item.produit.price * item.quantite), 0);
  }

  // Envoyer tout le panier d'un coup sur WhatsApp
  validerCommandeWhatsApp(): void {
    const numeroTelephone = "237671140545";
    
    if (this.panier().length === 0) return;

    let message = "Bonjour, je souhaite passer commande pour les articles suivants :\n\n";
    
    // Boucle sur chaque article du panier
    this.panier().forEach(item => {
      const sousTotal = item.produit.price * item.quantite;
      message += `• ${item.produit.title} (Qté: ${item.quantite}) - ${sousTotal} $\n`;
    });

    message += `\n💰 *Montant Total : ${this.getMontantTotal()} $*`;

    const urlEncodee = encodeURIComponent(message);
    const lienWhatsApp = `https://wa.me/${numeroTelephone}?text=${urlEncodee}`;
    
    window.open(lienWhatsApp, '_blank');
  }
}

import { Injectable } from '@angular/core';

export interface Produit {
  id: number;
  image: string;
  title: string;
  price: number; 
  buttonText: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private produitsList: Produit[] = [
    {
      id: 1,
      image: 'img/photo3.webp', 
      title: 'Coureur AirFlex',
      price: 89.00,
      buttonText: 'Ajouter au Panier'
    },
    {
      id: 2,
      image: 'img/photo2.webp',
      title: 'Urban Street Pro',
      price: 99.00,
      buttonText: 'Ajouter au Panier'
    },
     {
      id: 3,
      image: 'img/photo4.webp',
      title: 'Court classique des anners 90',
      price: 79.00,
      buttonText: 'Ajouter au Panier'
    },
     {
      id: 4,
      image: 'img/photo5.webp',
      title: 'Volt Edge',
      price: 119.00,
      buttonText: 'Ajouter au Panier'
    },
     {
      id: 5,
      image: 'img/photo6.webp',
      title: 'Flux zenithal',
      price: 129.00,
      buttonText: 'Ajouter au Panier'
    },
     {
      id: 6,
      image: 'img/photo7.webp',
      title: 'Street Vibe Low',
      price: 69.00,
      buttonText: 'Ajouter au Panier'
    },
     {
      id: 7,
      image: 'img/photo8.webp',
      title: 'Nova Horizon',
      price: 109.00,
      buttonText: 'Ajouter au Panier'
    },
     {
      id: 8,
      image: 'img/photo9.webp',
      title: 'Reaction pulser',
      price: 99.00,
      buttonText: 'Ajouter au Panier'
    },
     {
      id: 10,
      image: 'img/photo10.webp',
      title: 'Core Street Retro',
      price: 85.00,
      buttonText: 'Ajouter au Panier'
    }
  ];

  getProduits(): Produit[] {
    return this.produitsList;
  }
}

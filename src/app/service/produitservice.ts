import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  Produits: Produit[] = [{
     name: "Macobo",
      quantite: 3,
       prix: 1000 },
       {
     name: "Banane",
      quantite: 5,
       prix: 10000 },
       {
     name: "Igname",
      quantite: 5,
       prix: 5000 },
       {
     name: "Riz",
      quantite: 200,
       prix: 6000 },
      ];
  isconnect:Boolean= true;
  lister():Produit[]{
    return this.Produits;
  }
 
}
export interface Produit {
  name: string;
  quantite: number;
  prix: number;
}


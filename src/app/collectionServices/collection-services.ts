import { Injectable } from '@angular/core';
export interface Collection{
  font:String,
  title:String,
  desc:String
}
@Injectable({
  providedIn: 'root',
})
export class CollectionServices {
  produits:Collection[]=[{font:"",title:"",desc:""}];
}


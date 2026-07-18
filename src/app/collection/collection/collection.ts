import { Component ,inject} from '@angular/core';
import { CollectionServices } from '../../collectionServices/collection-services';

@Component({
  selector: 'app-collection',
  imports: [],
  templateUrl: './collection.html',
  styleUrl: './collection.css',
})
export class Collection {
  private produits=inject(CollectionServices);
    // listeDeProduits: Collection[] = this.produits.lister();
    // lister():Collection[]{
    //     return this.Collection;
    //   }
  


}

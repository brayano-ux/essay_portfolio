import { Routes } from '@angular/router';
import { Collection } from './collection/collection/collection';

export const routes: Routes = [
  {
    path: '',
    component: Collection
  },
  {
    path: 'collection', 
    component: Collection
  },
   {
    path: 'headers', 
    component: Headers
  }
];

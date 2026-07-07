import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-autre',
  imports: [CommonModule],
  templateUrl: './autre.html',
  styleUrl: './autre.css',
})
export class Autre {
  nbre:number=1;
  nom: string="Brayano";
  image:string="./img/photo1.jpeg";
  verite:boolean=true;
  tab:string[]=["Brayano","Brayan","Brayanito"];
  personne={nom:"Brayano",prenom:"Brayan",age:20};
  tableauobjet=[{nom:"Brayano",prenom:"Brayan",age:20},{nom:"Brayano",prenom:"Brayan",age:20}];
}

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  protected readonly faUser = faUser;
}

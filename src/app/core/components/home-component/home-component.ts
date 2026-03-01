import { Component } from '@angular/core';
import { ProfileCardComponent } from '../profile-card-component/profile-card-component';

@Component({
  selector: 'app-home-component',
  imports: [ProfileCardComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {}

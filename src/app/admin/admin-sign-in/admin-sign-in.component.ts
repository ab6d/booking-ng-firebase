import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../infrastructure/services/auth.service';

@Component({
  selector: 'app-admin-sign-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.scss']
})
export class AdminSignInComponent {
  constructor(
    public authService: AuthService
  ) { }
}

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrl: './navber.component.scss'
})
export class NavberComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}

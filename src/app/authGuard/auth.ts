import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {

    const token = this.authService.isLoggedIn();

    if (token) {
      return true;
    }

    // Redirección segura
    return this.router.createUrlTree(['/login']);
  }
}


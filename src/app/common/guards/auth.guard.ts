import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private appService: AppService) { }

  canActivate() {
    if (this.appService.getAuthentication()) {
      return true;
    }
    this.router.navigate(['/']);
  }

}

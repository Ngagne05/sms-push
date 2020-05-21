import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthsvService } from './authsv.service';
import { Role } from '../models/role';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthsvService, private router: Router,private location: Location){}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }

    const roles = route.data.roles as Role[];
        if (roles && !roles.some(r => this.auth.hasRole(r))) {
            this.location.back();
            return false;
        }

    return true;
  }
  
}
